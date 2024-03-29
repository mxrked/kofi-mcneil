import { connectDatabase } from "@/db/connections/connectToDB";

const EXCLUDED_SUBDOMAINS = ["compute-1.amazonaws.com"];
const AZURE_IPS = ["40.77.167.0/24", "20.150.0.0/16", "40.90.0.0/16"];
const GOOGLE_USER_AGENTS = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
];

export default async function handler(req, res) {
  try {
    // Load AWS IP ranges JSON (you may need to use a library like 'node-fetch')
    const awsIpRangesUrl = "https://ip-ranges.amazonaws.com/ip-ranges.json";
    const awsIpRanges = await fetch(awsIpRangesUrl).then((response) =>
      response.json()
    );

    // console.log("awsIpRanges:", awsIpRanges); // Add this line for debugging
    // Extract IP prefixes for EC2_INSTANCE_CONNECT and AMAZON service
    const ec2InstanceConnectIps = awsIpRanges.prefixes
      .filter((entry) => entry.service === "EC2_INSTANCE_CONNECT")
      .map((entry) => entry.ip_prefix);
    const ec2Ips = awsIpRanges.prefixes
      .filter((entry) => entry.service === "EC2")
      .map((entry) => entry.ip_prefix);
    const amazonIps = awsIpRanges.prefixes
      .filter((entry) => entry.service === "AMAZON")
      .map((entry) => entry.ip_prefix);

    // Capture the client's IP address
    const CLIENT_IP =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;

    // Checking if the IP is not localhost (127.0.0.1) and not ::1 (localhost as well)
    const ON_LOCALHOST = CLIENT_IP !== "127.0.0.1" && CLIENT_IP !== "::1";

    // Check if the client's IP is in the list of EC2, EC2_INSTANCE_CONNECT and AMAZON IPs
    if (ec2Ips.includes(CLIENT_IP)) {
      // Handle traffic from EC2 IPs
      res.json({
        message: "EC2 traffic detected",
        clientIP: CLIENT_IP,
      });
      return;
    }

    if (ec2InstanceConnectIps.includes(CLIENT_IP)) {
      // Handle traffic from EC2_INSTANCE_CONNECT IPs
      res.json({
        message: "EC2_INSTANCE_CONNECT traffic detected",
        clientIP: CLIENT_IP,
      });
      return;
    }

    if (amazonIps.includes(CLIENT_IP)) {
      // Handle traffic from AMAZON IPs
      res.json({
        message: "AMAZON traffic detected",
        clientIP: CLIENT_IP,
      });
      return;
    }

    // Check the User-Agent header to filter out unwanted traffic
    const userAgent = req.headers["user-agent"];
    const isRealUserAgent = checkUserAgent(userAgent);

    // Check if the user agent is from Google
    const isGoogleBot = isGoogleUserAgent(userAgent);

    if (isGoogleBot) {
      res.status(404).json({ message: "Googlebot traffic detected" });
    }

    // Capture the host (domain) from the request headers
    const HOST = req.headers.host;

    // Check if the host contains any excluded subdomains
    if (isExcludedSubdomain(HOST)) {
      // Handle traffic from excluded subdomains
      res.json({ message: "Excluded subdomain detected", host: HOST });
      return;
    }

    // Excluding Microsoft AZURE ips
    const isAzureIP = AZURE_IPS.some((azureIP) =>
      checkIsIPInRange(CLIENT_IP, azureIP)
    );

    if (isAzureIP) {
      // Handle traffic from Microsoft Azure IPs
      res.json({
        message: "Microsoft Azure traffic detected",
        clientIP: CLIENT_IP,
      });
      return;
    }

    // Connect to the database
    const DB = await connectDatabase();

    if (!DB) {
      res.status(500).json({ error: "Failed to connect to MongoDB" });
      return;
    }

    // Retrieve all ips
    const allIPs = await DB.collection("ips").distinct("ip");
    const allIPs_GOOGLE = await DB.collection("ips").find().toArray();

    // Check each IP in the database to see if it's related to GoogleBot
    const googleBotIPs = allIPs_GOOGLE.filter((ipEntry) => {
      return ipEntry.userAgent && isGoogleUserAgent(ipEntry.userAgent);
    });

    // Check each ip against list of EC2, EC2_INSTANCE_CONNECT and AMAZON services
    const ec2IPsInDatabase = allIPs.filter((ip) =>
      ec2Ips.some((prefix) => ip.startsWith(prefix))
    );
    const ec2InstanceConnectIpsInDatabase = allIPs.filter((ip) =>
      ec2InstanceConnectIps.some((prefix) => ip.startsWith(prefix))
    );
    const amazonIpsInDatabase = allIPs.filter((ip) =>
      amazonIps.some((prefix) => ip.startsWith(prefix))
    );

    // Only proceed if not on localhost and the User-Agent is valid
    if (ON_LOCALHOST && isRealUserAgent) {
      // Insert the IP only if it doesn't exist
      await DB.collection("ips").findOneAndUpdate(
        { ip: CLIENT_IP },
        {
          $setOnInsert: {
            ip: CLIENT_IP,
            userAgent: userAgent,
            host: HOST,
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );
    }

    // Identify and store duplicate IPs
    const duplicateIPs = await DB.collection("ips")
      .aggregate([
        {
          $group: {
            _id: "$ip",
            count: { $sum: 1 },
            docs: { $push: "$_id" },
          },
        },
        {
          $match: {
            count: { $gt: 1 },
          },
        },
      ])
      .toArray();

    // Remove all but the first occurrence of each duplicate
    duplicateIPs.forEach(async (duplicate) => {
      const [firstDoc, ...restDocs] = duplicate.docs;
      await DB.collection("ips").deleteMany({ _id: { $in: restDocs } });
    });

    // Removing the entries that have LOCALHOST_IPS values
    const LOCALHOST_IPS = ["127.0.0.1", "::1"];
    await DB.collection("ips").deleteMany({ ip: { $in: LOCALHOST_IPS } });

    // Removing the entries that have NETLIFY_IPS values
    // const NETLIFY_IPS = ["3.236.227.176", "54.172.255.46"];
    // await DB.collection("ips").deleteMany({ ip: { $in: NETLIFY_IPS } });

    // Remove entries with excluded subdomains
    await DB.collection("ips").deleteMany({
      host: { $in: EXCLUDED_SUBDOMAINS },
    });
    await DB.collection("ips").deleteMany({
      host: { $regex: /bucolic-cuchufli-d1cce2\.netlify\.app/ },
    });

    // Removing entries that relate to Microsoft Azure
    for (const ipInDatabase of allIPs) {
      if (checkIsIPInAzureRange(ipInDatabase)) {
        await DB.collection("ips").deleteMany({ ip: ipInDatabase });
      }
    }

    const ALL_UNIQUE_IPS = await DB.collection("ips").find().toArray();

    res.json({
      allUniqueIPs: ALL_UNIQUE_IPS,
      ec2Ips: ec2IPsInDatabase,
      ec2InstanceConnectIps: ec2InstanceConnectIpsInDatabase,
      amazonIps: amazonIpsInDatabase,
      googleIps: googleBotIPs,
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function checkUserAgent(userAgent) {
  // Define a list of valid user agents
  const VALID_USER_AGENTS = ["Mozilla", "Chrome", "Safari", "Firefox", "Edge"];

  // Check if the User-Agent matches any of the valid user agents
  return VALID_USER_AGENTS.some((ua) => userAgent.includes(ua));
}

function isGoogleUserAgent(userAgent) {
  // Check if the User-Agent contains any Google user agents
  return GOOGLE_USER_AGENTS.some((ua) => userAgent.includes(ua));
}

function isExcludedSubdomain(host) {
  // Check if the host (domain) contains any excluded subdomains
  return EXCLUDED_SUBDOMAINS.some((subdomain) => host.endsWith(subdomain));
}

function checkIsIPInRange(ip, range) {
  const [rangeIP, rangeCIDR] = range.split("/");
  const rangeParts = rangeIP.split(".");
  const ipParts = ip.split(".");
  const mask = parseInt(rangeCIDR, 10);

  for (let i = 0; i < mask / 8; i++) {
    if (ipParts[i] !== rangeParts[i]) {
      return false;
    }
  }

  return true;
}

function checkIsIPInAzureRange(ip) {
  for (const azureRange of AZURE_IPS) {
    if (checkIsIPInRange(ip, azureRange)) {
      return true;
    }
  }
  return false;
}

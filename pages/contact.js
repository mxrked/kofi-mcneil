// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/connectToDB";
import checkLocation from "@/assets/functions/async/checkLocation";

// Component Imports
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
// import "../assets/styles/modules/Contact/Contact.module.css";

export async function getServerSideProps() {
  // Connecting to DB
  try {
    const DB = await connectDatabase();

    if (!DB) {
      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          PH_CONTACT: null,
          PH_ICONS: null,
        },
      };
    }

    // Checking if DB was connected
    if (DB) {
      console.log("Connected to DB!");
    }

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    const PH_ICONS_FILE_PATH = path.join(
      process.cwd(),
      "public/data/json/page-head-data/",
      "PH_Icons.json"
    );
    const PH_CONTACT_FILE_PATH = path.join(
      process.cwd(),
      "public/data/json/page-head-data/",
      "PH_Contact.json"
    );

    const PH_ICONS_FILE_CONTENTS = fs.readFileSync(PH_ICONS_FILE_PATH, "utf-8");
    const PH_CONTACT_FILE_CONTENTS = fs.readFileSync(
      PH_CONTACT_FILE_PATH,
      "utf-8"
    );

    const PH_ICONS = JSON.parse(PH_ICONS_FILE_CONTENTS);
    const PH_CONTACT = JSON.parse(PH_CONTACT_FILE_CONTENTS);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        PH_CONTACT,
        PH_ICONS,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        PH_CONTACT: null,
        PH_ICONS: null,
      },
    };
  }
}

export default function Contact({ TOTAL_NUMBER_OF_IPS, PH_ICONS, PH_CONTACT }) {
  const router = useRouter();

  // Triggering trackWebsiteVisits.js
  useEffect(() => {
    const FETCH_WEBSITE_VISITS = async () => {
      try {
        const response = await fetch("/api/trackWebsiteVisits.js");

        const data = await response.json();
        //   console.log("Fetched Data: ", data);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };

    FETCH_WEBSITE_VISITS();
  }, []);

  // Displaying the number of page visits
  useEffect(() => {
    if (TOTAL_NUMBER_OF_IPS > 0) {
      console.log("Website Visits: " + TOTAL_NUMBER_OF_IPS);
    } else {
      console.log("There are no website visits..");
    }
  }, []);

  return (
    <div id="PAGE" className="page half-second">
      <PageHead page_head_data={PH_CONTACT} icons_data={PH_ICONS} />
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt half-second">
        Contact
      </div>
    </div>
  );
}

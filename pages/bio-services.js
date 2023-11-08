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
import { PH_BioServices } from "@/assets/components/global/All/page-heads/PH_BioServices";
import { NavTop } from "@/assets/components/global/Nav/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { BioServicesTop } from "@/assets/components/pages/BioServices/BioServicesTop";
import { BioServicesBio } from "@/assets/components/pages/BioServices/BioServicesBio";
import { BioServicesMissionVision } from "@/assets/components/pages/BioServices/BioServicesMissionVision";

// Style Imports
// import "../assets/styles/modules/BioServices/BioServices.module.css";

export async function getServerSideProps() {
  const BIO_SERVICES_MISSION_VISION_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/bio-services/",
    "Mission_Vision.json"
  );
  const BIO_SERVICES_MISSION_VISION_FILE_CONTENTS = fs.readFileSync(
    BIO_SERVICES_MISSION_VISION_FILE_PATH,
    "utf-8"
  );
  let BIO_SERVICES_MISSION_VISION_DATA = undefined;

  // Connecting to DB
  try {
    const DB = await connectDatabase();

    BIO_SERVICES_MISSION_VISION_DATA = JSON.parse(
      BIO_SERVICES_MISSION_VISION_FILE_CONTENTS
    );

    if (!DB) {
      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          BIO_SERVICES_MISSION_VISION_DATA,
          // PH_BIOSERVICES: null,
          // PH_ICONS: null,
        },
      };
    }

    // Checking if DB was connected
    if (DB) {
      console.log("Connected to DB!");
    }

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    BIO_SERVICES_MISSION_VISION_DATA = JSON.parse(
      BIO_SERVICES_MISSION_VISION_FILE_CONTENTS
    );
    // const PH_ICONS_FILE_PATH = path.join(
    //   process.cwd(),
    //   "public/data/json/page-head-data/",
    //   "PH_Icons.json"
    // );
    // const PH_BIO_SERVICES_FILE_PATH = path.join(
    //   process.cwd(),
    //   "public/data/json/page-head-data/",
    //   "PH_BioServices.json"
    // );

    // const PH_ICONS_FILE_CONTENTS = fs.readFileSync(PH_ICONS_FILE_PATH, "utf-8");
    // const PH_BIO_SERVICES_FILE_CONTENTS = fs.readFileSync(
    //   PH_BIO_SERVICES_FILE_PATH,
    //   "utf-8"
    // );

    // const PH_ICONS = JSON.parse(PH_ICONS_FILE_CONTENTS);
    // const PH_BIOSERVICES = JSON.parse(PH_BIO_SERVICES_FILE_CONTENTS);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        BIO_SERVICES_MISSION_VISION_DATA,
        // PH_BIOSERVICES,
        // PH_ICONS,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        BIO_SERVICES_MISSION_VISION_DATA,
        // PH_BIOSERVICES: null,
        // PH_ICONS: null,
      },
    };
  }
}

export default function BioServices({
  TOTAL_NUMBER_OF_IPS,
  BIO_SERVICES_MISSION_VISION_DATA,
  // PH_ICONS,
  // PH_BIOSERVICES,
}) {
  const router = useRouter();

  // Triggering trackWebsiteVisits.js
  useEffect(() => {
    const FETCH_WEBSITE_VISITS = async () => {
      try {
        const response = await fetch("/api/trackers/trackWebsiteVisits");

        if (response.ok) {
          console.log("Response is OK!");
        } else {
          console.error("Response is NOT ok...");
        }

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

  // Jumping to anchor points if hash is found
  useEffect(() => {
    if (document.getElementById("bioAnchorPoint")) {
      if (router.asPath.indexOf("#bio") > -1) {
        document.getElementById("bioAnchorPoint").scrollIntoView();
      }
    }

    if (document.getElementById("servicesAnchorPoint")) {
      if (router.asPath.indexOf("#services") > -1) {
        document.getElementById("servicesAnchorPoint").scrollIntoView();
      }
    }
  }, []);

  return (
    <div id="PAGE" className="page half-second">
      <PH_BioServices />
      <LoadingScreen />
      <MobileNavMenu />

      <div id="PAGE_CNT" className="page-cnt half-second">
        <NavTop />
        <DesktopNav />
        <MobileNav />

        <BioServicesTop />
        <BioServicesBio />
        <BioServicesMissionVision
          mission_vision_data={BIO_SERVICES_MISSION_VISION_DATA}
        />

        <Footer />
      </div>
    </div>
  );
}

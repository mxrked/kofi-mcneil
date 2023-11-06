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

// Style Imports
// import "../assets/styles/modules/BioServices/BioServices.module.css";

export async function getServerSideProps() {
  // Connecting to DB
  try {
    const DB = await connectDatabase();

    if (!DB) {
      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
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
        // PH_BIOSERVICES,
        // PH_ICONS,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        // PH_BIOSERVICES: null,
        // PH_ICONS: null,
      },
    };
  }
}

export default function BioServices({
  TOTAL_NUMBER_OF_IPS,
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

  return (
    <div id="PAGE" className="page half-second">
      <PH_BioServices />
      <LoadingScreen />
      <MobileNavMenu />

      <div id="PAGE_CNT" className="page-cnt half-second">
        <NavTop />
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
}

// React/Next Imports
import { useEffect, useState } from "react";
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
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  // Connecting to DB
  try {
    const DB = await connectDatabase();

    if (!DB) {
      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          PH_INDEX: null,
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
    const PH_INDEX_FILE_PATH = path.join(
      process.cwd(),
      "public/data/json/page-head-data/",
      "PH_Index.json"
    );

    const PH_ICONS_FILE_CONTENTS = fs.readFileSync(PH_ICONS_FILE_PATH, "utf-8");
    const PH_INDEX_FILE_CONTENTS = fs.readFileSync(PH_INDEX_FILE_PATH, "utf-8");

    const PH_ICONS = JSON.parse(PH_ICONS_FILE_CONTENTS);
    const PH_INDEX = JSON.parse(PH_INDEX_FILE_CONTENTS);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        PH_INDEX,
        PH_ICONS,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        PH_INDEX: null,
        PH_ICONS: null,
      },
    };
  }
}

export default function Home({ TOTAL_NUMBER_OF_IPS, PH_ICONS, PH_INDEX }) {
  const router = useRouter();

  // Triggering trackWebsiteVisits.js
  useEffect(() => {
    const FETCH_WEBSITE_VISITS = async () => {
      try {
        const isOnLocalHost = await checkLocation();
        const response = await fetch("/api/trackWebsiteVisits.js");

        if (response.ok) {
          const data = await response.json();

          if (isOnLocalHost) {
            console.log("-- On Localhost --");
            console.log("Fetched Data: ", data);
          }
        } else {
          console.log("-- On Localhost --");
          console.error("Fetch request failed with status: ", response.status);
          return;
        }
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
      <PageHead page_head_data={PH_INDEX} icons_data={PH_ICONS} />
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt half-second">
        Home
      </div>
    </div>
  );
}

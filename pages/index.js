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
import { PH_Index } from "@/assets/components/global/All/page-heads/PH_Index";
import { NavTop } from "@/assets/components/global/Nav/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexServices } from "@/assets/components/pages/Index/IndexServices";
import { IndexConsultation } from "@/assets/components/pages/Index/IndexConsultation";
import { IndexMissionVision } from "@/assets/components/pages/Index/IndexMissionVision";
import { IndexTestimonials } from "@/assets/components/pages/Index/IndexTestimonials";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  const TESTIMONIALS_DATA_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/testimonials-data/",
    "Testimonials.json"
  );
  const BIO_SERVICES_MISSION_VISION_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/bio-services/",
    "Mission_Vision.json"
  );

  const BIO_SERVICES_MISSION_VISION_FILE_CONTENTS = fs.readFileSync(
    BIO_SERVICES_MISSION_VISION_FILE_PATH,
    "utf-8"
  );
  const TESTIMONIALS_DATA_FILE_CONTENTS = fs.readFileSync(
    TESTIMONIALS_DATA_FILE_PATH,
    "utf-8"
  );

  let BIO_SERVICES_MISSION_VISION_DATA = undefined;
  let TESTIMONIALS_DATA = undefined;

  // Connecting to DB
  try {
    const DB = await connectDatabase();

    TESTIMONIALS_DATA = JSON.parse(TESTIMONIALS_DATA_FILE_CONTENTS);
    BIO_SERVICES_MISSION_VISION_DATA = JSON.parse(
      BIO_SERVICES_MISSION_VISION_FILE_CONTENTS
    );

    if (!DB) {
      console.log("NO DATA!");

      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          TESTIMONIALS_DATA,
          BIO_SERVICES_MISSION_VISION_DATA,
        },
      };
    }

    // Checking if DB was connected
    if (DB) {
      console.log("Connected to DB!");
    }

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    TESTIMONIALS_DATA = JSON.parse(TESTIMONIALS_DATA_FILE_CONTENTS);
    BIO_SERVICES_MISSION_VISION_DATA = JSON.parse(
      BIO_SERVICES_MISSION_VISION_FILE_CONTENTS
    );

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        TESTIMONIALS_DATA,
        BIO_SERVICES_MISSION_VISION_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        TESTIMONIALS_DATA,
        BIO_SERVICES_MISSION_VISION_DATA,
      },
    };
  }
}

export default function Home({
  TOTAL_NUMBER_OF_IPS,
  TESTIMONIALS_DATA,
  BIO_SERVICES_MISSION_VISION_DATA,
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

  // Displaying Testimonials
  useEffect(() => {
    if (
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "localhost"
    ) {
      console.table(TESTIMONIALS_DATA);
    }
  }, []);

  return (
    <div id="PAGE" className="page half-second">
      <PH_Index />
      <LoadingScreen />
      <MobileNavMenu />
      <PaymentRequiredWall />

      <div id="PAGE_CNT" className="page-cnt half-second">
        <NavTop />
        <DesktopNav />
        <MobileNav />

        <IndexTop />
        <IndexServices />
        <IndexConsultation />
        <IndexMissionVision
          mission_vision_data={BIO_SERVICES_MISSION_VISION_DATA}
        />
        {/**   */}
        <IndexTestimonials testimonials_data={TESTIMONIALS_DATA} />
        <IndexContact />

        <Footer />
      </div>
    </div>
  );
}

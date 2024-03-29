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
import { PH_Contact } from "@/assets/components/global/All/page-heads/PH_Contact";
import { NavTop } from "@/assets/components/global/Nav/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

import { ContactTop } from "@/assets/components/pages/Contact/ContactTop";
import { ContactConsultation } from "@/assets/components/pages/Contact/ContactConsultation";
import { ContactForm } from "@/assets/components/pages/Contact/ContactForm";
import { SubmissionSuccessMessage } from "@/assets/components/global/All/SubmissionSuccessMessage";

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
          // PH_CONTACT: null,
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
    // const PH_CONTACT_FILE_PATH = path.join(
    //   process.cwd(),
    //   "public/data/json/page-head-data/",
    //   "PH_Contact.json"
    // );

    // const PH_ICONS_FILE_CONTENTS = fs.readFileSync(PH_ICONS_FILE_PATH, "utf-8");
    // const PH_CONTACT_FILE_CONTENTS = fs.readFileSync(
    //   PH_CONTACT_FILE_PATH,
    //   "utf-8"
    // );

    // const PH_ICONS = JSON.parse(PH_ICONS_FILE_CONTENTS);
    // const PH_CONTACT = JSON.parse(PH_CONTACT_FILE_CONTENTS);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        // PH_CONTACT,
        // PH_ICONS,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        // PH_CONTACT: null,
        // PH_ICONS: null,
      },
    };
  }
}

export default function Contact({
  TOTAL_NUMBER_OF_IPS,
  // PH_ICONS,
  // PH_CONTACT
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
    if (document.getElementById("consultationAnchorPoint")) {
      if (router.asPath.indexOf("#consultation") > -1) {
        document.getElementById("consultationAnchorPoint").scrollIntoView();
      }
    }

    if (document.getElementById("contactFormAnchorPoint")) {
      if (router.asPath.indexOf("#contact_form") > -1) {
        document.getElementById("contactFormAnchorPoint").scrollIntoView();
      }
    }
  }, []);

  // Displaying the submission form success message if sent
  useEffect(() => {
    if (sessionStorage.getItem("Submission Sent")) {
      document.getElementById("submissionSuccessMessage").style.display =
        "flex";
      document
        .getElementById("submissionSuccessMessage")
        .querySelector("button").style.pointerEvents = "auto";

      document.getElementById("submissionSuccessMessage").style.opacity = 1;
      document.getElementById("submissionSuccessMessage").style.visibility =
        "visible";

      setTimeout(() => {
        document.getElementById("submissionSuccessMessage").style.opacity = 0;
        document.getElementById("submissionSuccessMessage").style.visibility =
          "hidden";
        document
          .getElementById("submissionSuccessMessage")
          .querySelector("button").style.pointerEvents = "none";
      }, 7000);
    }
  }, []);

  return (
    <div id="PAGE" className="page half-second">
      <PH_Contact />
      <LoadingScreen />
      <MobileNavMenu />
      <SubmissionSuccessMessage />
      <PaymentRequiredWall />

      <div id="PAGE_CNT" className="page-cnt half-second">
        <NavTop />
        <DesktopNav />
        <MobileNav />

        <ContactTop />
        <ContactConsultation />
        <ContactForm />

        <Footer />
      </div>
    </div>
  );
}

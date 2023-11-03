// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";

// Style Imports
// import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page half-second">
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt half-second">
        Contact
      </div>
    </div>
  );
}

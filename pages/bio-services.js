// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";

// Style Imports
// import "../assets/styles/modules/BioServices/BioServices.module.css";

export default function BioServices() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page half-second">
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt half-second">
        Bio/Services
      </div>
    </div>
  );
}

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page">
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt">
        404
      </div>
    </div>
  );
}

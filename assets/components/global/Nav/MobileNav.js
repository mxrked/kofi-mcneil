/**
 *
 *  This is the Mobile Nav
 *
 */

import { useRouter } from "next/router";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {router.pathname !== "/" ? (
                  <div
                    style={{ cursor: "pointer" }}
                    className={`${styles.logo}`}
                    onClick={() => {
                      TriggerPageExit();

                      setTimeout(() => {
                        router.push("/");
                      }, 700);
                    }}
                  >
                    <span
                      className={`${styles.top_text} orientation-change-element half-second`}
                    >
                      <span className={`${styles.colored_text}`}>S</span>oft{" "}
                      <span className={`${styles.colored_text}`}>S</span>kill IT{" "}
                      <span className={`${styles.colored_text}`}>C</span>
                      ommunications
                    </span>

                    <span
                      className={`${styles.bottom_text} orientation-change-element half-second`}
                    >
                      Kofi Mcneil - IT Public Speaker/Consultant
                    </span>
                  </div>
                ) : (
                  <div
                    className={`${styles.logo}`}
                    style={{ cursor: "default", pointerEvents: "none" }}
                  >
                    <span
                      className={`${styles.top_text} orientation-change-element half-second`}
                    >
                      <span className={`${styles.colored_text}`}>S</span>oft{" "}
                      <span className={`${styles.colored_text}`}>S</span>kill IT{" "}
                      <span className={`${styles.colored_text}`}>C</span>
                      ommunications
                    </span>

                    <span
                      className={`${styles.bottom_text} orientation-change-element half-second`}
                    >
                      Kofi Mcneil - IT Public Speaker/Consultant
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  id="mobileNavMenuToggler"
                  onClick={() => {
                    DeclareStorageVariable(
                      "session",
                      "Mobile Nav Opened",
                      true
                    );

                    document.body.style.overflowY = "hidden";
                    document.body.style.pointerEvents = "none";

                    document.getElementById("mobileNavMenu").style.display =
                      "flex";

                    setTimeout(() => {
                      document.getElementById(
                        "mobileNavMenuDarken"
                      ).style.opacity = 1;
                      document.getElementById(
                        "mobileNavMenuDarken"
                      ).style.visibility = "visible";

                      document.getElementById(
                        "mobileNavMenuMain"
                      ).style.transform = "translateX(0)";
                    }, 600);

                    setTimeout(() => {
                      document.getElementById(
                        "mobileNavMenuMainCnt"
                      ).style.opacity = 1;
                      document.getElementById(
                        "mobileNavMenuMainCnt"
                      ).style.visibility = "visible";
                    }, 1300);

                    setTimeout(() => {
                      document.getElementById(
                        "mobileNavMenuDarken"
                      ).style.pointerEvents = "auto";
                      document.getElementById(
                        "mobileNavMenuMain"
                      ).style.overflowY = "auto";
                      document.getElementById(
                        "mobileNavMenuMain"
                      ).style.pointerEvents = "auto";
                    }, 2100);
                  }}
                >
                  <span className="orientation-change-element half-second" />
                  <span className="orientation-change-element half-second" />
                  <span className="orientation-change-element half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

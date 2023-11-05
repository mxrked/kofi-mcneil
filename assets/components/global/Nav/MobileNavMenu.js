/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { useRouter } from "next/router";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const router = useRouter();

  const closeMobileNav = () => {
    document.getElementById("mobileNavMenuDarken").style.pointerEvents = "none";
    document.getElementById("mobileNavMenuMain").style.pointerEvents = "none";
    document.getElementById("mobileNavMenuMainCnt").style.opacity = 0;
    document.getElementById("mobileNavMenuMainCnt").style.visibility = "hidden";

    setTimeout(() => {
      document.getElementById("mobileNavMenuDarken").style.opacity = 0;
      document.getElementById("mobileNavMenuDarken").style.visibility =
        "hidden";
      document.getElementById("mobileNavMenuMain").style.transform =
        "translateX(100%)";
    }, 900);

    setTimeout(() => {
      RemoveStorageVariable("session", "Mobile Nav Opened");

      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }, 1750);
  };

  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={closeMobileNav}
      />

      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
        >
          <div className={`${styles.mobile_nav_menu_main_cnt_top}`}>
            <button
              id="mobileNavCloser"
              className="orientation-change-element half-second"
              onClick={closeMobileNav}
            >
              <span />
              <span />
            </button>

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
          </div>

          <ul>
            {router.pathname !== "/" ? (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    closeMobileNav();

                    setTimeout(() => {
                      router.push("/");
                    }, 1790);
                  }}
                >
                  Go Home
                </span>
              </li>
            ) : (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                    opacity: 0.5,
                  }}
                >
                  Go Home
                </span>
              </li>
            )}
            <br />
            {router.pathname !== "/bio-services" ? (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    closeMobileNav();

                    setTimeout(() => {
                      router.push("/bio-services");
                    }, 1790);
                  }}
                >
                  Bio/Services
                </span>
              </li>
            ) : (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                    opacity: 0.5,
                  }}
                >
                  Bio/Services
                </span>
              </li>
            )}
            <br />
            {router.pathname !== "/contact" ? (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    closeMobileNav();

                    setTimeout(() => {
                      router.push("/contact#contact_form");
                    }, 1790);
                  }}
                >
                  Contact Me
                </span>
              </li>
            ) : (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                    opacity: 0.5,
                  }}
                >
                  Contact Me
                </span>
              </li>
            )}
            <br />
            {router.pathname !== "/contact" ? (
              <li
                onClick={() => {
                  closeMobileNav();

                  setTimeout(() => {
                    router.push("/contact#consultation");
                  }, 1790);
                }}
              >
                <span
                  className="orientation-change-element half-second"
                  style={{ cursor: "pointer" }}
                >
                  Book A Consultant
                </span>
              </li>
            ) : (
              <li>
                <span
                  className="orientation-change-element half-second"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                    opacity: 0.5,
                  }}
                >
                  Book A Consultant
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

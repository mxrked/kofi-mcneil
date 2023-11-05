/**
 *
 *  This is the Desktop Nav
 *
 */

import { useRouter } from "next/router";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                {router.pathname !== "/" ? (
                  <div
                    style={{ cursor: "pointer" }}
                    className={`${styles.logo}`}
                    onClick={() => {
                      router.push("/");
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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul>
                  {router.pathname !== "/" ? (
                    <li>
                      <span
                        className="orientation-change-element half-second"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push("/");
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
                  {router.pathname !== "/bio-services" ? (
                    <li>
                      <span
                        className="orientation-change-element half-second"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push("/bio-services");
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
                  {router.pathname !== "/contact" ? (
                    <li>
                      <span
                        className="orientation-change-element half-second"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push("/contact#contact_form");
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
                  {router.pathname !== "/contact" ? (
                    <li
                      style={{ cursor: "pointer" }}
                      className={`${styles.consultation_link} orientation-change-element half-second`}
                      onClick={() => {
                        router.push("/contact#consultation");
                      }}
                    >
                      <span>Book A Consultant</span>
                    </li>
                  ) : (
                    <li
                      style={{
                        cursor: "default",
                        pointerEvents: "none",
                        opacity: 0.5,
                      }}
                      className={`${styles.consultation_link} orientation-change-element half-second`}
                    >
                      <span>Book A Consultant</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

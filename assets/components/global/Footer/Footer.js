/**
 *
 *  This is the Footer
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { MdPhoneInTalk, MdMail, MdCopyright } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  // Setting currentYear
  useEffect(() => {
    const CURRENT_YEAR = new Date().getFullYear();

    document.getElementById("currentYear").innerText = CURRENT_YEAR;
  }, []);

  return (
    <footer id="footer" className={`${styles.footer}`}>
      <div className={`${styles.footer_top}`}>
        <div className={`${styles.footer_top_inner}`}>
          <div className={`${styles.footer_top_inner_box} container-fluid`}>
            <div className={`${styles.footer_top_inner_row} row`}>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_top_L} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
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
                        <span className={`${styles.colored_text}`}>S</span>kill
                        IT <span className={`${styles.colored_text}`}>C</span>
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
                        <span className={`${styles.colored_text}`}>S</span>kill
                        IT <span className={`${styles.colored_text}`}>C</span>
                        ommunications
                      </span>

                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        Kofi Mcneil - IT Public Speaker/Consultant
                      </span>
                    </div>
                  )}

                  <div className={`${styles.copyright}`}>
                    <MdCopyright className={`${styles.icon}`} />{" "}
                    <span>
                      Copyright, All rights reserved.{" "}
                      <span id="currentYear"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_top_M} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <ul>
                    {router.pathname !== "/" ? (
                      <li>
                        <span
                          className="orientation-change-element half-second"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            TriggerPageExit();

                            setTimeout(() => {
                              router.push("/");
                            }, 700);
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
                            TriggerPageExit();

                            setTimeout(() => {
                              router.push("/bio-services");
                            }, 700);
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
                            TriggerPageExit();

                            setTimeout(() => {
                              router.push("/contact#contact_form");
                            }, 700);
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
                      <li>
                        <span
                          style={{ cursor: "pointer" }}
                          className={`orientation-change-element half-second`}
                          onClick={() => {
                            TriggerPageExit();

                            setTimeout(() => {
                              router.push("/contact#consultation");
                            }, 700);
                          }}
                        >
                          Book A Consultant
                        </span>
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
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_top_R} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <ul>
                    <li>
                      <a
                        href="tel:+18284717987"
                        className="orientation-change-element half-second"
                      >
                        <MdPhoneInTalk className={`${styles.icon}`} />

                        <span className="half-second">(828) 471-7987</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailTo:kmcneil63@gmail.com"
                        className="orientation-change-element half-second"
                      >
                        <MdMail className={`${styles.icon}`} />

                        <span className="half-second">kmcneil63@gmail.com</span>
                      </a>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kofi-mcneil-319b13238/"
                        className="orientation-change-element half-second"
                      >
                        <FaLinkedin className={`${styles.icon}`} />

                        <span className="half-second">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/kofi.mcneil"
                        className="orientation-change-element half-second"
                      >
                        <FaFacebook className={`${styles.icon}`} />

                        <span className="half-second">Facebook</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <span>
          Created by{" "}
          <a href="https://www.codingthefront.com" className="half-second">
            codingthefront.com
          </a>
        </span>
      </div>
    </footer>
  );
};

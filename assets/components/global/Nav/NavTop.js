/**
 *
 *  This is the Nav Top
 *
 */

import { MdPhoneInTalk, MdMail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const NavTop = () => {
  return (
    <section id="navTop" className={`${styles.nav_top}`}>
      <div className={`${styles.nav_top_inner}`}>
        <div className={`${styles.nav_top_inner_box} container-fluid`}>
          <div className={`${styles.nav_top_inner_row} row`}>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
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
              </div>
            </div>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
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
    </section>
  );
};

/**
 *
 *  This is the Index Services
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { INDEX_SERVICES_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";
import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

export const IndexServices = () => {
  const router = useRouter();

  return (
    <section id="indexServices" className={`${styles.index_services}`}>
      <div className={`${styles.index_services_inner}`}>
        <div className={`${styles.index_services_inner_box} container-fluid`}>
          <div className={`${styles.index_services_inner_row} row`}>
            <div
              className={`${styles.index_services_inner_side} ${styles.index_services_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
            >
              <LazyLoadBackgroundImage
                image_url={INDEX_SERVICES_BG}
                image_alt={
                  "Soft Skill IT Communications: Woman with orange headphones working on code."
                }
                style_className_MAIN={styles.bg}
                style_className_PLACEHOLDER={styles.bg_placeholder}
              />
            </div>
            <div
              className={`${styles.index_services_inner_side} ${styles.index_services_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
            >
              <div className={`${styles.index_services_inner_side_cnt}`}>
                <span
                  className={`${styles.top_text} orientation-change-element half-second`}
                >
                  Empowering IT Professionals:{" "}
                </span>

                <h2 className="orientation-change-element half-second">
                  Kofi Mcneil's Tailored Services for Coding, Security, SOC and
                  CISO's.
                </h2>

                <p className="orientation-change-element half-second">
                  He enhances public speaking skills for programmers,
                  developers, penetration testers, red team, blue team, SOC
                  analysts, CISO Officers, and other IT professionals. Whether
                  you're a seasoned pro or a newcomer, Kofi offers personalized
                  coaching, workshops, and seminars to advance your IT public
                  speaking and communication abilities.
                </p>

                <div
                  className="orientation-change-element half-second"
                  onClick={() => {
                    TriggerPageExit();

                    setTimeout(() => {
                      router.push("/bio-services#services");
                    }, 700);
                  }}
                >
                  <span className="half-second">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 *
 *  This is the Index Consultation
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import { INDEX_CONSULTATION_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexConsultation = () => {
  const router = useRouter();

  return (
    <section id="indexConsultation" className={`${styles.index_consultation}`}>
      <div className={`${styles.index_consultation_inner}`}>
        <div
          className={`${styles.index_consultation_inner_box} container-fluid`}
        >
          <div className={`${styles.index_consultation_inner_row} row`}>
            <div
              className={`${styles.index_consultation_inner_side} ${styles.index_consultation_L} col-lg-7 col-md-7 col-sm-7 col-xs-12 order-lg-0 order-md-0 order-sm-1 order-1`}
            >
              <div className={`${styles.index_consultation_inner_side_cnt}`}>
                <span
                  className={`${styles.top_text} orientation-change-element half-second`}
                >
                  Empowering Your Future In IT:
                </span>

                <h2 className="orientation-change-element half-second">
                  Master IT Public Speaking with Kofi Mcneil: Expert IT
                  Consultant.
                </h2>

                <p className="orientation-change-element half-second">
                  Enhance your IT public speaking abilities with a consultation
                  from Kofi Mcneil. Gain personalized guidance for confidence,
                  audience engagement, and lasting impact. Unlock your potential
                  as a dynamic IT communicator, serving Programmers, Developers,
                  Penetration Testers, Red Team, Blue Team, SOC Analysts, CISO
                  Officers, and more. Book your consultation now!
                </p>

                <div
                  className="orientation-change-element half-second"
                  onClick={() => {
                    TriggerPageExit();

                    setTimeout(() => {
                      router.push("/contact#consultation");
                    }, 700);
                  }}
                >
                  <span className="half-second">Book A Consultation</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_consultation_inner_side} ${styles.index_consultation_R} col-lg-5 col-md-5 col-sm-5 col-xs-12 order-lg-1 order-md-1 order-sm-0 order-0`}
            >
              <LazyLoadBackgroundImage
                image_url={INDEX_CONSULTATION_BG}
                image_alt={
                  "Soft Skill IT Communications: Man talking infront of white board to a group of people."
                }
                style_className_MAIN={styles.bg}
                style_className_PLACEHOLDER={styles.bg_placeholder}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

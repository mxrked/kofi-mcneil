/**
 *
 *  This is the Index Top
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import { INDEX_TOP_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <LazyLoadBackgroundImage
        image_url={INDEX_TOP_BG}
        image_alt={
          "Soft Skill IT Communications: Man speaking infront of group of people."
        }
        style_className_MAIN={styles.bg}
        style_className_PLACEHOLDER={styles.bg_placeholder}
      />

      <div className={`${styles.index_top_overlay}`}>
        <div className={`${styles.index_top_overlay_cnt}`}>
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            Empowering Your IT Journey:
          </span>
          <h1 className="orientation-change-element half-second">
            Meet Kofi Mcneil, Your IT Public Speaking Skills Guide.
          </h1>

          <p className="orientation-change-element half-second">
            Elevate Your IT Profile and Impress Business Leaders with
            Exceptional Communication Skills. Discover how Kofi Mcneil can help
            you communicate your IT expertise with confidence and leave a
            lasting mark in the tech industry.
          </p>

          <ul>
            <li
              className={`${styles.bio_services_link} orientation-change-element half-second`}
              onClick={() => {
                TriggerPageExit();

                setTimeout(() => {
                  router.push("/bio-services");
                }, 700);
              }}
            >
              <span className="half-second">Bio/Services</span>
            </li>

            <li
              className={`${styles.consultation_link} orientation-change-element half-second`}
              onClick={() => {
                TriggerPageExit();

                setTimeout(() => {
                  router.push("/contact#consultation");
                }, 700);
              }}
            >
              <span className="half-second">Book A Consultation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

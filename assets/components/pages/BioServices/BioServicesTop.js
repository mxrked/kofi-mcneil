/**
 *
 *  This is the BioServices Top
 *
 */

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { BIO_SERVICES_TOP_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/BioServices/BioServices.module.css";

export const BioServicesTop = () => {
  return (
    <section id="bioServicesTop" className={`${styles.bio_services_top}`}>
      <LazyLoadBackgroundImage
        image_url={BIO_SERVICES_TOP_BG}
        image_alt={
          "Soft Skill IT Communications: Man speaking infront of group of people."
        }
        style_className_MAIN={styles.bg}
        style_className_PLACEHOLDER={styles.bg_placeholder}
      />

      <div className={`${styles.bio_services_top_overlay}`}>
        <div className={`${styles.bio_services_top_overlay_cnt}`}>
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            Bio/Services:
          </span>
          <h1 className="orientation-change-element half-second">
            Meet The CEO and his IT Public Speaking services.
          </h1>

          <p className="orientation-change-element half-second">
            Discover how Kofi Mcneil can help you communicate your IT expertise
            with confidence and leave a lasting mark in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

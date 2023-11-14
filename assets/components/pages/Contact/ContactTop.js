/**
 *
 *  This is the Contact Top
 *
 */

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { CONTACT_TOP_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  return (
    <section id="contactTop" className={`${styles.contact_top}`}>
      <LazyLoadBackgroundImage
        image_url={CONTACT_TOP_BG}
        image_alt={
          "Soft Skill IT Communications: Happy man working at desk on a computer."
        }
        style_className_MAIN={styles.bg}
        style_className_PLACEHOLDER={styles.bg_placeholder}
      />

      <div className={`${styles.contact_top_overlay}`}>
        <div className={`${styles.contact_top_overlay_cnt}`}>
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            Contact/Book a Consultation:
          </span>
          <h1 className="orientation-change-element half-second">
            Get in Touch with Kofi Mcneil: Your IT Public Speaking Consultant.
          </h1>

          <p className="orientation-change-element half-second">
            Unlock your potential as a dynamic IT communicator, serving
            Programmers, Developers, Penetration Testers, Red Team, Blue Team,
            SOC Analysts, CISO Officers, and more. Book your consultation now!
          </p>
        </div>
      </div>
    </section>
  );
};

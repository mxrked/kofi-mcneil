/**
 *
 *  This is the Index Contact
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import { INDEX_CONTACT_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const router = useRouter();

  return (
    <section id="indexContact" className={`${styles.index_contact}`}>
      <div className={`${styles.index_contact_inner}`}>
        <div className={`${styles.index_contact_inner_img}`}>
          <LazyLoadBackgroundImage
            image_url={INDEX_CONTACT_BG}
            image_alt={
              "Soft Skill IT Communications: Group of people talking during a meeting with laptop."
            }
            style_className_MAIN={styles.bg}
            style_className_PLACEHOLDER={styles.bg_placeholder}
          />
        </div>

        <div className={`${styles.index_contact_inner_text}`}>
          <div className={`${styles.index_contact_inner_text_cnt}`}>
            <span
              className={`${styles.top_text} orientation-change-element half-second`}
            >
              Empowering Our Connection:
            </span>

            <h2 className="orientation-change-element half-second">
              Get in Touch with Kofi Mcneil: Your IT Public Speaking Expert
            </h2>

            <p className="orientation-change-element half-second">
              Contact Kofi Mcneil, the IT public speaking expert, to discuss how
              he can help Programmers, Developers, Penetration Testers, Red
              Team, Blue Team, SOC Analysts, CISO Officers, and other IT
              professionals enhance their communication abilities and make a
              lasting impact in the tech world. Whether you're a seasoned pro or
              just starting your journey, Kofi's coaching empowers you with the
              skills and confidence to succeed. Unlock your full potential in IT
              public speaking—reach out to Kofi Mcneil today.
            </p>

            <div
              className="orientation-change-element half-second"
              onClick={() => {
                TriggerPageExit();

                setTimeout(() => {
                  router.push("/contact#contact_form");
                }, 700);
              }}
            >
              <span className="half-second">Reach Out Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

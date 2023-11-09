/**
 *
 *  This is the BioServices Services
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { BIO_SERVICES_SERVICES_BG } from "@/assets/cdns/CDNBgs";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

// import {
//   CISO_OFFICER_IMG,
//   PENETRATION_TESTER_IMG,
//   RED_BLUE_TEAM_IMG,
//   PROGRAMMER_DEVELOPER_IMG,
//   SOC_ANALYST_IMG,
// } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/BioServices/BioServices.module.css";

export const BioServicesServices = ({ bio_services_services_data }) => {
  const router = useRouter();

  return (
    <section
      id="bioServicesServices"
      className={`${styles.bio_services_services}`}
    >
      <div id="servicesAnchorPoint" />
      <div className={`${styles.bio_services_services_inner}`}>
        <div className={`${styles.bio_services_services_inner_top}`}>
          <div
            className={`${styles.bio_services_services_inner_top_bg_holder}`}
          >
            <LazyLoadBackgroundImage
              image_url={BIO_SERVICES_SERVICES_BG}
              image_alt={
                "Soft Skill IT Communications: Group of people behind a digital globe."
              }
              style_className_MAIN={styles.bg}
              style_className_PLACEHOLDER={styles.bg_placeholder}
            />
          </div>

          <div className={`${styles.bio_services_services_inner_top_text}`}>
            <span
              className={`${styles.top_text} orientation-change-element half-second`}
            >
              Kofi Mcneil's Services:
            </span>

            <h2 className="orientation-change-element half-second">
              Whom can I confidently aid in improving their soft skills?
            </h2>
          </div>
        </div>

        <div className={`${styles.bio_services_services_inner_main}`}>
          {bio_services_services_data.map((service) => (
            <div
              key={service.serviceID}
              className={`${styles.service} ${styles[service.serviceID]}`}
            >
              <div className={`${styles.service_inner}`}>
                <div className={`${styles.service_inner_box} container-fluid`}>
                  <div className={`${styles.service_inner_row} row`}>
                    <div
                      className={`${styles.service_inner_side} ${styles.service_L} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                    >
                      <LazyLoadBackgroundImage
                        image_url={service.serviceImg}
                        image_alt={service.serviceImgAlt}
                        style_className_MAIN={styles.bg}
                        style_className_PLACEHOLDER={styles.bg_placeholder}
                      />
                    </div>
                    <div
                      className={`${styles.service_inner_side} ${styles.service_R} col-lg-8 col-md-8 col-sm-12 col-xs-12`}
                    >
                      <div className={`${styles.service_inner_side_cnt}`}>
                        <span
                          className={`${styles.service_name} orientation-change-element half-second`}
                        >
                          {service.serviceName}
                        </span>

                        <p className="orientation-change-element half-second">
                          {service.serviceText}
                        </p>

                        <ul>
                          {service.serviceSoftSkills.map((skill) => (
                            <li className="orientation-change-element half-second">
                              {skill}
                            </li>
                          ))}
                        </ul>

                        {service.serviceCitation !== "" &&
                        service.serviceCitation !== null &&
                        service.serviceCitation !== "N/A" ? (
                          <a
                            href={service.serviceCitation}
                            target="_blank"
                            className="orientation-change-element half-second"
                          >
                            Citation
                          </a>
                        ) : null}

                        <br />

                        <div
                          className={`${styles.consultation_link} orientation-change-element half-second`}
                          onClick={() => {
                            TriggerPageExit();

                            setTimeout(() => {
                              router.push(
                                `/contact#consultation#${service.serviceConsultationHash}`
                              );
                            }, 700);
                          }}
                        >
                          <span className="half-second">
                            Book A Consultation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

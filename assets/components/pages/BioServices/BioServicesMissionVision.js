/**
 *
 *  This is the BioServices Mission and Vision
 *
 */

import styles from "../../../styles/modules/BioServices/BioServices.module.css";

export const BioServicesMissionVision = ({ mission_vision_data }) => {
  return (
    <section
      id="bioServicesMissionVision"
      className={`${styles.bio_services_mission_vision}`}
    >
      <div className={`${styles.bio_services_mission_vision_inner}`}>
        {mission_vision_data.map((section) => (
          <div key={section.sectionID} className={`${styles.inner_section}`}>
            <div className={`${styles.inner_section_cnt}`}>
              <h3 className="orientation-change-element half-second">
                {section.sectionHeading}
              </h3>

              <p className="orientation-change-element half-second">
                {section.sectionText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

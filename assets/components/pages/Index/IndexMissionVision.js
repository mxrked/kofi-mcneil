/**
 *
 *  This is the Index Mission and Vision
 *
 */

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexMissionVision = ({ mission_vision_data }) => {
  return (
    <section
      id="indexMissionVision"
      className={`${styles.index_mission_vision}`}
    >
      <div className={`${styles.index_mission_vision_inner}`}>
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

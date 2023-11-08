/**
 *
 *  This is the BioServices Bio
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import { SELF_IMG_1, SELF_IMG_2 } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/BioServices/BioServices.module.css";

export const BioServicesBio = () => {
  const SOFT_SKILLS = [
    {
      softSkillID: "SS_1",
      softSkillNumber: 1,
      softSkillName: "Problem Solving",
      softSkillText:
        "Effective troubleshooting and creative problem-solving skills.",
    },
    {
      softSkillID: "SS_2",
      softSkillNumber: 2,
      softSkillName: "Adaptability",
      softSkillText:
        "The capacity to embrace change and stay current in a rapidly evolving field.",
    },
    {
      softSkillID: "SS_3",
      softSkillNumber: 3,
      softSkillName: "Teamwork",
      softSkillText: "Collaboration with cross-functional teams and clients.",
    },
    {
      softSkillID: "SS_4",
      softSkillNumber: 4,
      softSkillName: "Time Management",
      softSkillText: "Efficiently managing multiple tasks and projects.",
    },
    {
      softSkillID: "SS_5",
      softSkillNumber: 5,
      softSkillName: "Leadership",
      softSkillText:
        "Guiding and mentoring team members and taking initiative.",
    },
    {
      softSkillID: "SS_6",
      softSkillNumber: 6,
      softSkillName: "Empathy",
      softSkillText:
        "Understanding end-users' needs and providing customer-centric solutions.",
    },
    {
      softSkillID: "SS_7",
      softSkillNumber: 7,
      softSkillName: "Conflict Resolution",
      softSkillText:
        "Navigating and resolving disputes in high-pressure situations.",
    },
    {
      softSkillID: "SS_8",
      softSkillNumber: 8,
      softSkillName: "Attention to Detail",
      softSkillText: "Ensuring accuracy in coding and documentation.",
    },
    {
      softSkillID: "SS_9",
      softSkillNumber: 9,
      softSkillName: "Creativity",
      softSkillText:
        "Thinking innovatively to find unique solutions to problems.",
    },
    {
      softSkillID: "SS_10",
      softSkillNumber: 10,
      softSkillName: "Effective Communication",
      softSkillText:
        "The ability to convey complex technical concepts in clear, non-technical language.",
    },
  ];

  return (
    <section id="bioServicesBio" className={`${styles.bio_services_bio}`}>
      <div className={`${styles.bio_services_bio_inner}`}>
        <div className={`${styles.bio_services_bio_inner_img_holder}`}>
          <LazyLoadImage
            src={SELF_IMG_1}
            alt={"Soft Skill IT Communications: Image of CEO Kofi Mcneil."}
            title={"Soft Skill IT Communications: Image of CEO Kofi Mcneil."}
          />
          <div id="bioAnchorPoint" />
        </div>

        <div className={`${styles.bio_services_bio_inner_text}`}>
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            Kofi Mcneil's Bio:
          </span>

          <h2 className="orientation-change-element half-second">
            Meet The CEO.
          </h2>

          <em className="orientation-change-element half-second">
            Let me help you and coach IT professionals and organizations to
            thrive globally with essential soft skills, including effective
            communication.
          </em>

          <p className="orientation-change-element half-second">
            Hello, I'm Kofi McNeil, and I bring over five years of experience in
            the field of information technology, a journey that began as a
            student and has since evolved into a dynamic career. With three
            years as a dedicated student and now as an IT intern, I have
            witnessed the transformative power of both technical expertise and a
            diverse set of essential soft skills.
          </p>

          <p className="orientation-change-element half-second">
            My journey in the IT world started as a student with a relentless
            passion for technology. Today, as an IT intern, I've gathered
            invaluable insights, not just about technology but also about the
            human aspect of this ever-evolving industry.
          </p>

          <p className="orientation-change-element half-second">
            What sets me apart is my diverse background. Prior to my IT journey,
            I served as a correctional officer and later as a hearing officer,
            gaining specialized training in verbal de-escalation, interpersonal
            communication, and rational emotional behavioral techniques. These
            experiences have given me a unique perspective and a robust skill
            set that goes beyond technical expertise. I understand the
            significance of effective communication, conflict resolution, and
            emotional intelligence in both the IT field and the broader business
            world.
          </p>

          <p className="orientation-change-element half-second">
            With your technical know-how and experience, you've got your foot in
            the IT door, but to truly advance your career and set yourself
            apart, you need to bolster a suite of critical soft skills,
            including:
          </p>

          <ol>
            {SOFT_SKILLS.map((skill) => (
              <li key={skill.softSkillID}>
                <span className={`${styles.skill_number_and_name}`}>
                  <span
                    className={`${styles.skill_number} orientation-change-element half-second`}
                  >
                    {skill.softSkillNumber}.
                  </span>

                  <span
                    className={`${styles.skill_name} orientation-change-element half-second`}
                  >
                    {skill.softSkillName}
                  </span>
                </span>

                <p className="orientation-change-element half-second">
                  {skill.softSkillText}
                </p>
              </li>
            ))}
          </ol>

          <p className="orientation-change-element half-second">
            Today, let me help you and coach IT professionals and organizations
            to thrive globally with this comprehensive set of crucial soft
            skills, enabling you to thrive more efficiently and effectively. By
            bridging the gap between IT expertise and a diverse range of soft
            skills, we can unlock your potential, enhance your professional
            skill set, and elevate your organization to new heights.
          </p>

          <em className="orientation-change-element half-second">
            Are you ready to transform your IT career or organization through
            the power of these essential soft skills? Let's embark on this
            journey together.
          </em>
        </div>
      </div>
    </section>
  );
};

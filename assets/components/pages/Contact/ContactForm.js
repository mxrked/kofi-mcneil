/**
 *
 *  This is the Contact Form
 *
 */

import { useRouter } from "next/router";
import { useEffect } from "react";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";
import emailjs from "@emailjs/browser";
import { FaInfoCircle } from "react-icons/fa";

import { CONTACT_FORM_IMG } from "@/assets/cdns/CDNImgs";

import CheckValidEmail from "@/assets/functions/data/email/CheckValidEmail";
import CheckValidZip from "@/assets/functions/data/email/CheckZipCode";
import CheckValidPhoneNumber from "@/assets/functions/data/email/CheckValidPhoneNumber";
import CheckForSpaceInFirstCharacter from "@/assets/functions/data/email/CheckForSpaceInFirstCharacter";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import TabPressChecking from "@/assets/functions/dom/email/TabPressChecking";
import CheckEmptyOrSpaceValue from "@/assets/functions/dom/email/CheckEmptyOrSpaceValue";
import ResetBorderColor from "@/assets/functions/dom/email/ResetBorderColor";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactForm = () => {
  const router = useRouter();

  const IT_CATEGORIES = [
    "Programmers/Developers",
    "Penetration Testers",
    "Red Team/Blue Team",
    "SOC Analysts",
    "CISO Officers",
  ];

  const resetForm = () => {
    const FORM_HINT = document.getElementById("formHint");
    const FN = document.getElementById("contactFirstName");
    const LN = document.getElementById("contactLastName");
    const EMAIL_ADDRESS = document.getElementById("contactEmailAddress");
    const PHONE_NUMBER = document.getElementById("contactPhoneNumber");
    const IT_CATEGORY = document.getElementById("contactITCategory");
    const SUBJECT = document.getElementById("contactSubject");
    const MESSAGE = document.getElementById("contactMessage");

    const BLANK_SPACE = document.createTextNode("\u00A0");
    FORM_HINT.innerText = "";
    FORM_HINT.appendChild(BLANK_SPACE);

    FN.value = "";
    LN.value = "";
    EMAIL_ADDRESS.value = "";
    PHONE_NUMBER.value = "";
    IT_CATEGORY.selectedIndex = 0;
    SUBJECT.value = "";
    MESSAGE.value = "";

    const FORM_ELEMENTS = [
      FN,
      LN,
      EMAIL_ADDRESS,
      PHONE_NUMBER,
      IT_CATEGORY,
      SUBJECT,
      MESSAGE,
    ];

    FORM_ELEMENTS.forEach((element) => {
      ResetBorderColor(element.tagName.toLowerCase(), element);
    });
  };

  const PUBLIC_KEY = "IbHRZR8TadY3zbZ_E";
  emailjs.init(PUBLIC_KEY);

  const getDate = () => {
    const TODAYS_DAY = new Date().getDate();
    const TODAYS_MONTH = new Date().getMonth();
    const TODAYS_YEAR = new Date().getFullYear();

    const TODAYS_DATE = TODAYS_MONTH + "/" + TODAYS_DAY + "/" + TODAYS_YEAR;

    return TODAYS_DATE;
  };

  const getTime = () => {
    let TODAYS_HOURS = new Date().getHours();
    const TODAYS_MINUTES = new Date().getMinutes();
    let amOrPm = "AM";

    // Adjust hours for PM
    if (TODAYS_HOURS >= 12) {
      amOrPm = "PM";
      TODAYS_HOURS = TODAYS_HOURS - 12;
    }

    // Ensure midnight is represented as 12:00 AM, not 0:00 AM
    if (TODAYS_HOURS === 0) {
      TODAYS_HOURS = 12;
    }

    const TODAYS_TIME = TODAYS_HOURS + ":" + TODAYS_MINUTES + amOrPm;

    return TODAYS_TIME;
  };

  const emailSend = () => {
    const SERVICE_ID = "service_sbetrse";
    const TEMPLATE_ID = "template_e3nx3tt";
    let sentSuccess = false;

    const TODAYS_DATE = getDate();
    const TODAYS_TIME = getTime();

    const COMPANY_NAME = "SoftSkillITCommunications";
    const FULL_NAME =
      document.getElementById("contactLastName").value +
      ", " +
      document.getElementById("contactFirstName").value;

    const FN = document.getElementById("contactFirstName");
    const LN = document.getElementById("contactLastName");
    const EMAIL_ADDRESS = document.getElementById("contactEmailAddress");
    const PHONE_NUMBER = document.getElementById("contactPhoneNumber");
    const IT_CATEGORY = document.getElementById("contactITCategory");
    const SUBJECT = document.getElementById("contactSubject");
    const MESSAGE = document.getElementById("contactMessage");
    const FORM_ELEMENTS = [
      FN,
      LN,
      EMAIL_ADDRESS,
      PHONE_NUMBER,
      IT_CATEGORY,
      SUBJECT,
      MESSAGE,
    ];

    // Validation flags for non-empty values in different rows
    let rowOnePassed = false;
    let rowTwoPassed = false;
    let rowThreePassed = false;
    let rowFourPassed = false;
    let rowFivePassed = false;

    // Validators for if there are no spaces as the first character
    const SPACE_FN = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[0]);
    const SPACE_LN = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[1]);
    const SPACE_EMAIL = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[2]);
    const SPACE_PHONE = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[3]);
    const SPACE_SUBJECT = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[5]);
    const SPACE_MESSAGE = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[6]);

    // Validators for if there are no spaces as the first character and the value is not empty
    const SVC_FN = CheckEmptyOrSpaceValue(FORM_ELEMENTS[0], SPACE_FN);
    const SVC_LN = CheckEmptyOrSpaceValue(FORM_ELEMENTS[1], SPACE_LN);
    const CHECK_EMAIL = CheckValidEmail(FORM_ELEMENTS[2]);
    const SVC_EMAIL = CheckEmptyOrSpaceValue(FORM_ELEMENTS[2], SPACE_EMAIL);
    const CHECK_PHONE = CheckValidPhoneNumber(FORM_ELEMENTS[3]);
    const SVC_PHONE = CheckEmptyOrSpaceValue(FORM_ELEMENTS[3], SPACE_PHONE);
    const SVC_SUBJECT = CheckEmptyOrSpaceValue(FORM_ELEMENTS[5], SPACE_SUBJECT);
    const SVC_MESSAGE = CheckEmptyOrSpaceValue(FORM_ELEMENTS[6], SPACE_MESSAGE);

    const BLANK_SPACE = document.createTextNode("\u00A0");
    // Row 1
    if (!SVC_FN) {
      FORM_ELEMENTS[0].style.borderColor = "red";
    }
    if (SVC_FN) {
      ResetBorderColor("input", FORM_ELEMENTS[0]);
      document.getElementById("formHint").innerText = "";
      document.getElementById("formHint").appendChild(BLANK_SPACE);
    }

    if (!SVC_LN) {
      FORM_ELEMENTS[1].style.borderColor = "red";
      document.getElementById("formHint").innerText =
        "Error: You cannot have a space as the first value or empty inputs.";

      document.getElementById("formHint").scrollIntoView();
    }
    if (SVC_LN) {
      ResetBorderColor("input", FORM_ELEMENTS[1]);
      document.getElementById("formHint").innerText = "";
      document.getElementById("formHint").appendChild(BLANK_SPACE);
    }

    if (SVC_FN && SVC_LN) {
      rowOnePassed = true;
    } else {
      rowOnePassed = false;
    }

    if (!SVC_FN || !SVC_LN) {
      document.getElementById("formHint").innerText =
        "Error: You cannot have a space as the first value or empty inputs.";

      document.getElementById("formHint").scrollIntoView();
    }

    // Row 2
    if (!SVC_EMAIL || !CHECK_EMAIL) {
      FORM_ELEMENTS[2].style.borderColor = "red";
    }
    if (rowOnePassed) {
      if (SVC_EMAIL && CHECK_EMAIL) {
        ResetBorderColor("input", FORM_ELEMENTS[2]);
        document.getElementById("formHint").innerText = "";
        document.getElementById("formHint").appendChild(BLANK_SPACE);
      }
    }

    if (!SVC_PHONE || !CHECK_PHONE) {
      FORM_ELEMENTS[3].style.borderColor = "red";
    }
    if (rowOnePassed) {
      if (SVC_PHONE && CHECK_PHONE) {
        ResetBorderColor("input", FORM_ELEMENTS[3]);
        document.getElementById("formHint").innerText = "";
        document.getElementById("formHint").appendChild(BLANK_SPACE);
      }
    }

    if (rowOnePassed) {
      if (SVC_EMAIL && CHECK_EMAIL && SVC_PHONE && CHECK_PHONE) {
        rowTwoPassed = true;
        document.getElementById("formHint").innerText = "";
        document.getElementById("formHint").appendChild(BLANK_SPACE);
      }
    }

    if (!SVC_EMAIL || !SVC_PHONE) {
      document.getElementById("formHint").innerText =
        "Error: You cannot have a space as the first value or empty inputs.";

      document.getElementById("formHint").scrollIntoView();
    }

    // Making sure that rowOne passes before showing email and phone error
    if (rowOnePassed) {
      if (!CHECK_EMAIL) {
        document.getElementById("formHint").innerText =
          "Error: That is not a valid email address.";

        document.getElementById("formHint").scrollIntoView();
      }

      if (!CHECK_PHONE) {
        document.getElementById("formHint").innerText =
          "Error: That is not a valid phone number.";

        document.getElementById("formHint").scrollIntoView();
      }
    }

    // Row 3
    if (FORM_ELEMENTS[4].selectedIndex == 0) {
      FORM_ELEMENTS[4].style.borderColor = "red";
      document.getElementById("formHint").innerText =
        "Error: You must select a IT section.";

      document.getElementById("formHint").scrollIntoView();
      // alert(document.getElementById("formHint").innerText);
      // rowThreePassed = false;
    }

    if (rowOnePassed && rowTwoPassed) {
      if (FORM_ELEMENTS[4].selectedIndex !== 0) {
        ResetBorderColor("select", FORM_ELEMENTS[4]);
        document.getElementById("formHint").innerText = "";
        document.getElementById("formHint").appendChild(BLANK_SPACE);
        rowThreePassed = true;
      }
    }

    // Row 4
    if (!SVC_SUBJECT) {
      FORM_ELEMENTS[5].style.borderColor = "red";
      // alert(document.getElementById("formHint").innerText);
    }
    if (rowOnePassed && rowTwoPassed && rowThreePassed) {
      if (SVC_SUBJECT) {
        ResetBorderColor("input", FORM_ELEMENTS[5]);
        document.getElementById("formHint").innerText = "";
        document.getElementById("formHint").appendChild(BLANK_SPACE);
        rowFourPassed = true;
      }
    }

    // Row 5
    if (!SVC_MESSAGE) {
      FORM_ELEMENTS[6].style.borderColor = "red";
    }
    if (rowOnePassed && rowTwoPassed && rowThreePassed && rowFourPassed) {
      if (SVC_MESSAGE) {
        ResetBorderColor("input", FORM_ELEMENTS[6]);
        document.getElementById("formHint").innerText = "";
        document.getElementById("formHint").appendChild(BLANK_SPACE);
        rowFivePassed = true;
      }
    }

    if (!SVC_SUBJECT || !SVC_MESSAGE) {
      document.getElementById("formHint").innerText =
        "Error: You cannot have a space as the first value or empty inputs.";

      document.getElementById("formHint").scrollIntoView();
    }

    // Checking if all rows passed
    if (
      rowOnePassed &&
      rowTwoPassed &&
      rowThreePassed &&
      rowFourPassed &&
      rowFivePassed
    ) {
      const EMAIL_JS_TEMPLATE_PARAMS = {
        email_company_name: COMPANY_NAME,
        email_reason_for_contact: FORM_ELEMENTS[5].value,
        email_full_name: FULL_NAME,
        email_date: TODAYS_DATE,
        email_time: TODAYS_TIME,
        email_first_name: FORM_ELEMENTS[0].value,
        email_last_name: FORM_ELEMENTS[1].value,
        email_client_email: FORM_ELEMENTS[2].value,
        email_phone_number: FORM_ELEMENTS[3].value,
        email_it_category:
          FORM_ELEMENTS[4].options[FORM_ELEMENTS[4].selectedIndex].text,
        email_message: FORM_ELEMENTS[6].value,
      };

      console.table(EMAIL_JS_TEMPLATE_PARAMS);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, EMAIL_JS_TEMPLATE_PARAMS)
        .then((res) => {
          console.log("Email sent successfully: " + res);

          sentSuccess = true;

          DeclareStorageVariable("session", "Submission Sent", true);

          setTimeout(() => {
            if (sentSuccess) {
              router.reload();
            }
          }, 300);
        })
        .catch((error) => {
          console.error("Error sending email: " + error);
        });

      // sentSuccess = true;

      // DeclareStorageVariable("session", "Submission Sent", true);

      // setTimeout(() => {
      //   if (sentSuccess) {
      //     router.reload();
      //   }
      // }, 300);
    }
  };

  useEffect(() => {
    const TODAYS_DATE = getDate();
    const TODAYS_TIME = getTime();

    console.log(TODAYS_DATE);
    console.log(TODAYS_TIME);
  }, []);

  return (
    <section id="contactForm" className={`${styles.contact_form}`}>
      <div id="contactFormAnchorPoint" />
      <div className={`${styles.contact_form_inner}`}>
        <div className={`${styles.contact_form_inner_top}`}>
          <LazyLoadBackgroundImage
            image_url={CONTACT_FORM_IMG}
            image_alt={
              "Soft Skill IT Communications: Two women and a man looking at a laptop."
            }
            style_className_MAIN={styles.bg}
            style_className_PLACEHOLDER={styles.bg_placeholder}
          />
        </div>

        <div className={`${styles.contact_form_holder}`}>
          <form>
            <div className={`${styles.form_top}`}>
              <h3 className="orientation-change-element half-second">
                Get In Touch:
              </h3>
            </div>

            <span
              id="formHint"
              className={`${styles.form_hint} orientation-change-element half-second`}
            >
              &nbsp;
            </span>

            <div className={`${styles.form_box} container-fluid`}>
              <div className={`${styles.form_row} ${styles.double_row} row`}>
                <div
                  className={`${styles.form_side} ${styles.form_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactFirstName"
                      className="orientation-change-element half-second"
                    >
                      First Name:
                    </label>

                    <input
                      type="text"
                      id="contactFirstName"
                      name="contactFirstName"
                      className="orientation-change-element half-second"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_side} ${styles.form_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactLastName"
                      className="orientation-change-element half-second"
                    >
                      Last Name:
                    </label>

                    <input
                      type="text"
                      id="contactLastName"
                      name="contactLastName"
                      className="orientation-change-element half-second"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_row} ${styles.double_row} row`}>
                <div
                  className={`${styles.form_side} ${styles.form_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactEmail"
                      className="orientation-change-element half-second"
                    >
                      Email Address:
                    </label>

                    <input
                      type="email"
                      id="contactEmailAddress"
                      name="contactEmailAddress"
                      className="orientation-change-element half-second"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_side} ${styles.form_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactPhoneNumber"
                      className="orientation-change-element half-second"
                    >
                      Phone Number:{" "}
                      {/** <FaInfoCircle className={`${styles.icon}`} /> */}
                    </label>

                    <input
                      type="tel"
                      id="contactPhoneNumber"
                      name="contactPhoneNumber"
                      className="orientation-change-element half-second"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_row} ${styles.single_row} row`}>
                <div
                  className={`${styles.form_side} ${styles.select_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactITCategory"
                      className="orientation-change-element half-second"
                    >
                      What IT section are you a part of?
                    </label>

                    <select
                      className="orientation-change-element half-second"
                      id="contactITCategory"
                    >
                      <option defaultChecked>-- NONE SELECTED --</option>
                      {IT_CATEGORIES.map((category) => (
                        <option>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className={`${styles.form_row} ${styles.single_row} row`}>
                <div
                  className={`${styles.form_side} ${styles.subject_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactSubject"
                      className="orientation-change-element half-second"
                    >
                      Reason for Contact:
                    </label>

                    <input
                      type="text"
                      id="contactSubject"
                      name="contactSubject"
                      className="orientation-change-element half-second"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_row} ${styles.single_row} row`}>
                <div
                  className={`${styles.form_side} ${styles.message_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.form_side_inner}`}>
                    <label
                      for="contactMessage"
                      className="orientation-change-element half-second"
                    >
                      Message:
                    </label>

                    <textarea
                      style={{ resize: "none" }}
                      id="contactMessage"
                      name="contactMessage"
                      className="orientation-change-element half-second"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.form_btns}`}>
              <button
                type={"reset"}
                className={`${styles.reset_btn} orientation-change-element half-second`}
                onClick={(e) => {
                  e.preventDefault();

                  resetForm();
                }}
              >
                <span>Reset Form</span>
              </button>
              <button
                type={"submit"}
                className={`${styles.submit_btn} orientation-change-element half-second`}
                onClick={(e) => {
                  e.preventDefault();

                  emailSend();
                }}
              >
                <span>Send Form</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

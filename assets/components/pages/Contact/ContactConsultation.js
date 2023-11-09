/**
 *
 *  This is the Contact Consultation
 *
 */

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactConsultation = () => {
  return (
    <section
      id="contactConsultation"
      className={`${styles.contact_consultation}`}
    >
      <div className={`${styles.contact_consultation_inner}`}>
        <div id="consultationAnchorPoint" />
        <h2 className="orientation-change-element half-second">
          Book A Consultation:
        </h2>

        <p className="orientation-change-element half-second">
          If you would like to book a consultation meeting with Kofi Mcneil,
          click on the button below to be redirected to the Calendly appointment
          booker.
        </p>

        <a href="" className="orientation-change-element half-second">
          <span className="half-second">Book A Consultation</span>
        </a>

        <p className="orientation-change-element half-second">
          If there are any issues or concerns about booking your consultation,
          you can reach out to Kofi Mcneil using the contact form below!
        </p>
      </div>
    </section>
  );
};

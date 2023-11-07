/**
 *
 *  This is the Index Testimonials
 *
 */

import { useRouter } from "next/router";

import { BsStarFill } from "react-icons/bs";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTestimonials = ({ testimonials_data }) => {
  const router = useRouter();

  const getColumnClasses = (index, totalColumns) => {
    const isOddNumber = totalColumns % 2 !== 0;

    if (isOddNumber && index === totalColumns - 1) {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12 offset-lg-3"; // Center the last column if odd number of columns
    } else {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12"; // Your existing classes for two columns
    }
  };

  return (
    <section className={`${styles.index_testimonials}`}>
      <div className={`${styles.index_testimonials_inner}`}>
        <div className={`${styles.index_testimonials_inner_top}`}>
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            Empowering Your Decision:
          </span>

          <h2 className="orientation-change-element half-second">
            Discover What Kofi Mcneil's
            <br /> Clients Are Sharing.
          </h2>
        </div>

        <div className={`${styles.index_testimonials_inner_main}`}>
          <div
            className={`${styles.index_testimonials_inner_main_box} container-fluid`}
          >
            <div className={`${styles.index_testimonials_inner_main_row} row`}>
              {testimonials_data.map((item, index) => (
                <div
                  key={item.testimonialID}
                  className={`${styles.testimonial} ${getColumnClasses(
                    index,
                    testimonials_data.length
                  )}`}
                >
                  <div className={`${styles.testimonial_inner}`}>
                    <div className={`${styles.testimonial_inner_cnt}`}>
                      <div
                        className={`${styles.img_holder} orientation-change-element half-second`}
                      >
                        <LazyLoadImage
                          src={item.testimonialImg}
                          alt={`Soft Skill IT Communications: Image of ${item.testimonialName}.`}
                          title={`Soft Skill IT Communications: Image of ${item.testimonialName}.`}
                        />
                      </div>

                      <div className={`${styles.testimonial_details_holder}`}>
                        <span
                          className={`${styles.testimonial_name} orientation-change-element half-second`}
                        >
                          {item.testimonialName}
                        </span>
                        <span
                          className={`${styles.testimonial_date} orientation-change-element half-second`}
                        >
                          {item.testimonialDate}
                        </span>

                        <p className="orientation-change-element half-second">
                          " {item.testimonialText} "
                        </p>
                      </div>

                      <ul>
                        {Array.from(
                          { length: item.testimonialRating },
                          (_, index) => (
                            <li key={index}>
                              <BsStarFill />
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

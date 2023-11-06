/**
 *
 *  This is the Lazy Load Background Image
 *
 */
import { useRef, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const LazyLoadBackgroundImage = ({
  image_url,
  image_alt,
  style_className_MAIN,
  style_className_PLACEHOLDER,
}) => {
  const [SHOW_PLACEHOLDER, SET_SHOW_PLACEHOLDER] = useState(true);
  const NOT_FOUND_URL =
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/kofi-mcneil/imgs/not_found_img.webp";

  const CONTAINER_REF = useRef(null);

  useEffect(() => {
    const getImageDataUri = async () => {
      try {
        const response = await fetch(image_url);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = () => {
          SET_SHOW_PLACEHOLDER(false); // Hide the placeholder once the background image is loaded
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.log("Error converting to data URI: " + error);
      }
    };

    getImageDataUri();
  }, [image_url]);

  return (
    <>
      {SHOW_PLACEHOLDER && (
        <LazyLoadImage
          src={image_url}
          alt={image_url !== NOT_FOUND_URL ? image_alt : "404 Image."}
          title={image_url !== NOT_FOUND_URL ? image_alt : "404 Image."}
          className={style_className_PLACEHOLDER}
          effect="blur"
          loading="eager"
        />
      )}

      <div
        ref={CONTAINER_REF}
        className={`${style_className_MAIN} ${
          SHOW_PLACEHOLDER ? "hidden" : ""
        }`}
        style={{
          backgroundImage: `url(${image_url})`,
        }}
        aria-label={image_url !== NOT_FOUND_URL ? image_alt : "404 Image."}
        title={image_url !== NOT_FOUND_URL ? image_alt : "404 Image."}
      />
    </>
  );
};

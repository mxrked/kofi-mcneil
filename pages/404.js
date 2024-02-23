// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports
import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

// Component Imports
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

// Style Imports
import "../assets/styles/modules/404/404.module.css";
import styles from "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page half-second">
      <Head>
        <title>Soft Skill IT Communications - 404</title>

        <link
          rel="icon"
          type="image/x-icon"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon.ico"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-16x16.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-32x32.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-48x48.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-64x64.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-96x96.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-128x128.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-192x192.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/favicon/favicon-512x512.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/apple-touch/apple-touch-icon-57x57.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/apple-touch/apple-touch-icon-76x76.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/apple-touch/apple-touch-icon-120x120.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/apple-touch/apple-touch-icon-152x152.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/apple-touch/apple-touch-icon-180x180.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/android/android-icon-72x72.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/android/android-icon-96x96.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/android/android-icon-144x144.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/android/android-icon-192x192.png"
          }
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/ms-app/ms-app-icon-32x32.png"
          }
        />
        <meta
          name="msapplication-square70x70logo"
          content={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/ms-app/ms-app-icon-70x70.png"
          }
        />
        <meta
          name="msapplication-square150x150logo"
          content={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/ms-app/ms-app-icon-150x150.png"
          }
        />
        <meta
          name="msapplication-wide310x150logo"
          content={
            "https://raw.githubusercontent.com/mxrked/Freelance_projects_CDN/main/kofi-mcneil/icons/tab-icons/ms-app/ms-app-icon-310x150.png"
          }
        />
      </Head>
      <LoadingScreen />
      <PaymentRequiredWall />

      <div id="PAGE_CNT" className={`${styles.pageCnt} page-cnt`}>
        <div className={`${styles.not_found_inner}`}>
          <div className={`${styles.not_found_inner_text}`}>
            <h1 className="orientation-change-element half-second">
              <span>Error Code:</span> 404
            </h1>

            <p className="orientation-change-element half-second">
              {`Uh Oh! The page you are looking for does not exist. If you are
              expecting a page to be here, please contact you website's
              developer:`}{" "}
              <strong style={{ fontWeight: "bold" }}>
                <a href="mailTo:codingthefront@gmail.com">
                  codingthefront@gmail.com
                </a>
              </strong>{" "}
              OR{" "}
              <strong style={{ fontWeight: "bold" }}>
                <a href="tel:+13368313432">(336) 831-3432</a>
              </strong>
              .
            </p>

            <p className="orientation-change-element half-second">
              You can go back to the home page by clicking the button below.
              Sorry for the inconvience!
            </p>

            <div
              className="orientation-change-element half-second"
              onClick={() => {
                TriggerPageExit();

                setTimeout(() => {
                  router.push("/");
                }, 500);
              }}
            >
              <span>Go Back Home</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

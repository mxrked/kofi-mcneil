/**
 *
 *  This is the Page Head
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

export const PH_BioServices = () => {
  const router = useRouter();

  const KEYWORDS = [
    "Kofi Mcneil Public Speaking Guide",
    "Elevate Your IT Profile",
    "Exceptional Communication Skills",
    "IT Expertise Confidence",
    "Tailored Services for IT Professionals",
    "Enhance Public Speaking for IT",
    "Personalized Coaching for IT Professionals",
    "IT Public Speaking Consultant",
    "Unlock IT Public Speaking Potential",
    "Effective IT Communication",
    "IT Speaker Development",
    "IT Presentation Skills",
    "Empower IT Communication",
    "IT Public Speaking Services",
    "Kofi Mcneil Communication Expert",
    "Empower IT Professionals",
    "Enhance IT Communication Skills",
    "IT Public Speaking Training",
    "Effective IT Presentation",
    "Kofi Mcneil Consulting Services",
    "Boost IT Public Speaking Skills",
    "IT Communication Confidence",
    "Empower Your IT Journey",
    "IT Communication Seminars",
    "IT Communication Guidance",
    "Enhance Your IT Future",
    "IT Speaker Workshops",
    "Kofi Mcneil Client Testimonials",
    "Effective IT Communication Impact",
    "IT Communication Specialist",
    "Confident IT Public Speaking",
    "Kofi Mcneil Contact Information",
    "Unlock IT Communicator Potential",
    "IT Public Speaking Services",
    "Essential Soft Skills IT",
    "Effective Communication in IT",
    "IT Soft Skills Training",
    "IT Soft Skills Coach",
    "IT Soft Skills Development",
    "IT Soft Skills Enhancement",
    "IT Soft Skills Coaching",
    "Transform IT Career",
    "IT Organization Development",
    "Bridging IT Expertise with Soft Skills",
    "Elevate IT Professional Skills",
  ];

  return (
    <Head>
      <title>
        Softskillitcommunications - Elevating IT Communication with Kofi Mcneil,
        Your Soft Skills Consultant
      </title>

      <meta name="keywords" content={KEYWORDS} />
      <meta
        name="description"
        content={
          "At Softskillitcommunications, Kofi Mcneil is your IT communication expert. Elevate your IT profile with exceptional communication skills and personalized coaching. Unlock your public speaking potential with tailored workshops and seminars. Empower your journey in IT and boost your confidence. Join us today!"
        }
      />
      <meta name="robots" content={"index, follow"} />
      <link
        rel="canonical"
        href={"https://softskillitcommunications.com/bio-services/"}
      />

      {/** LINKEDIN */}
      <meta
        property="og:linkedin"
        content={"https://www.linkedin.com/in/kofi-mcneil-319b13238/"}
      />

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
  );
};

/**
 *
 *  This holds the urls/srcs for the bgs
 *
 */

import { CDNBGReturn } from "./CDNReturns";

const INDEX_TOP_BG = CDNBGReturn("index", "index-top-bg", "webp");
const INDEX_SERVICES_BG = CDNBGReturn("index", "index-services-bg", "webp");
const INDEX_CONSULTATION_BG = CDNBGReturn(
  "index",
  "index-consultation-bg",
  "webp"
);
const INDEX_CONTACT_BG = CDNBGReturn("index", "index-contact-bg", "webp");

const BIO_SERVICES_TOP_BG = CDNBGReturn(
  "bio-services",
  "bio-services-top-bg",
  "webp"
);
const BIO_SERVICES_SERVICES_BG = CDNBGReturn(
  "bio-services",
  "bio-services-bg",
  "webp"
);

const CONTACT_TOP_BG = CDNBGReturn("contact", "contact-top-bg", "webp");

export {
  INDEX_TOP_BG,
  INDEX_SERVICES_BG,
  INDEX_CONSULTATION_BG,
  INDEX_CONTACT_BG,
};
export { BIO_SERVICES_TOP_BG, BIO_SERVICES_SERVICES_BG };
export { CONTACT_TOP_BG };

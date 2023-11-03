/**
 *
 *  This is the Fade Down
 *
 */

import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

import { FADE_DOWN } from "../objects/FADES";

export const FadeDown = ({ children }) => {
  const REF = useRef(null);

  return (
    <motion.div ref={REF} {...FADE_DOWN} className="fm-element">
      {children}
    </motion.div>
  );
};

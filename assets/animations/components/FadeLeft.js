/**
 *
 *  This is the Fade Left
 *
 */

import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

import { FADE_LEFT } from "../objects/FADES";

export const FadeLeft = ({ children }) => {
  const REF = useRef(null);

  return (
    <motion.div ref={REF} {...FADE_LEFT} className="fm-element">
      {children}
    </motion.div>
  );
};

/**
 *
 *  This is the Fade Right
 *
 */

import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

import { FADE_RIGHT } from "../objects/FADES";

export const FadeRight = ({ children }) => {
  const REF = useRef(null);

  return (
    <motion.div ref={REF} {...FADE_RIGHT} className="fm-element">
      {children}
    </motion.div>
  );
};

/**
 *
 *  This is the Fade Up
 *
 */

import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

import { FADE_UP } from "../objects/FADES";

export const FadeUp = ({ children }) => {
  const REF = useRef(null);

  return (
    <motion.div ref={REF} {...FADE_UP} className="fm-element">
      {children}
    </motion.div>
  );
};

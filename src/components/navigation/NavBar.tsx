"use client";
import React from "react";
import { BiHome, BiUserCircle } from "react-icons/bi";
import {
  BsClipboard2Data,
  BsBriefcaseFill,
  BsChatSquare,
} from "react-icons/bs";
import {
  FcHome,
  FcReadingEbook,
  FcDiploma2,
  FcCollaboration,
  FcBriefcase,
} from "react-icons/fc";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/framerMotion";

import LinkIcon from "../links/LinkIcon";
const Navbar = () => {
  return (
    <nav className="fixed bottom-3 lg:bottom-7 w-full overflow-hidden z-50">
      <motion.div
        variants={zoomIn(0.3, 2)}
        initial="hidden"
        whileInView="show"
        className="w-full bg-primary-600/20 backdrop-blur-3xl rounded-full max-w-[80%] md:max-w-[60%] mx-auto py-2 px-5 flex justify-between items-center text-2xl"
      >
        <a href="/#home" className="nav-btn">
          <FcHome />
        </a>
        <a href="/#about" className="nav-btn">
          <FcReadingEbook />
        </a>
        <a href="/#skills" className="nav-btn">
          <FcDiploma2 />
        </a>
        <a href="/#portfolio" className="nav-btn">
          <FcBriefcase />
        </a>
        <a href="/#contact" className="nav-btn">
          <FcCollaboration />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;

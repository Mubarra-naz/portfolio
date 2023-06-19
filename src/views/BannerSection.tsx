"use client";
import React from "react";
import SubHeading from "@/components/text/SubHeading";
import Tagline from "@/components/text/Tagline";
import { personalData } from "@/utils/data";
import BodyText from "@/components/text/BodyText";
import BorderBtn from "@/components/buttons/BorderBtn";
import FillBtn from "@/components/buttons/FillBtn";
import SocialLinks from "@/components/groups/SocialLinks";
import Profile from "@/components/Profile";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framerMotion";

const BannerSection = () => {
  return (
    <>
      <div className="section py-10 px-5 md:p-10" id="home">
        <div className="flex justify-between items-center space-x-3 md:space-x-4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="pt-20 md:pl-10 pl-3"
          >
            <BodyText>Hi, I&lsquo;m</BodyText>
            <h1 className="text-clip bg-gradient-to-r from-orange-200 to-white">
              {personalData.name}
            </h1>
            <SubHeading>{personalData.role}</SubHeading>
            <BodyText>
              <TypeAnimation
                sequence={[personalData.intro, 500]}
                speed={90}
                wrapper="span"
                cursor={false}
                repeat={0}
              ></TypeAnimation>
            </BodyText>
            <div className="flex space-x-7 justify-start items-center">
              <BorderBtn>
                <a href="/#contact">Contact me</a>
              </BorderBtn>
              <FillBtn>
                <a href="/#about">Portfolio</a>
              </FillBtn>
            </div>
            <SocialLinks
              mail={personalData.contactLinks.email}
              twitter={personalData.contactLinks.twitter}
              linkedin={personalData.contactLinks.linkedin}
              github={personalData.contactLinks.github}
            />
          </motion.div>
          <Profile
            img={personalData.imgLink}
            className="hidden lg:block md:w-[100%] pt-10"
          />
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            className="transform rotate-180 pb-20 pt-20 md:pb-5 px-3"
            style={{ writingMode: "vertical-rl" }}
          >
            <Tagline>{personalData.tagline}</Tagline>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-10">
        <Profile img={personalData.imgLink} className="lg:hidden w-[80%]" />
      </div>
    </>
  );
};

export default BannerSection;

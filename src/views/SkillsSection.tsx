"use client";
import BodyText from "@/components/text/BodyText";
import MainHeading from "@/components/text/MainHeading";
import SubHeading from "@/components/text/SubHeading";
import Tagline from "@/components/text/Tagline";
import { skillsData } from "@/utils/data";
import skillImg from "@/assets/images/skillImg.png";
import Image from "next/image";
import React from "react";
import SkillCard from "@/components/cards/SkillCard";
import AutoCarousel from "@/components/groups/AutoCarousel";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framerMotion";

const SkillsSection = () => {
  return (
    <div className="section p-10 md:p-20 mt-16" id="skills">
      <div className="w-100 overflow-hidden">
        <div className="flex flex-col space-y-20 md:flex-row space-x-5">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            className="relative md:h-[60vh]"
          >
            <SubHeading>{skillsData.subHeading}</SubHeading>
            <MainHeading>{skillsData.heading}</MainHeading>
            <BodyText>{skillsData.text}</BodyText>
            <Image
              src={skillImg}
              alt="skills-bg"
              className="hidden md:block w-60 absolute bottom-0 right-3"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-around"
          >
            {skillsData.services.map((service, index) => (
              <div
                className="flex space-x-5 border-b-2 border-b-white/30 mb-8"
                key={index}
              >
                <div>
                  <Image
                    src={service.icon}
                    alt="service-icon"
                    className="w-52 md:w-36"
                  />
                </div>
                <div>
                  <Tagline>{service.title}</Tagline>
                  <BodyText>{service.text}</BodyText>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="my-28">
          <AutoCarousel>
            {skillsData.skillsList.map((skill, index) => (
              <SkillCard path={skill.icon} text={skill.text} key={index} />
            ))}
          </AutoCarousel>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

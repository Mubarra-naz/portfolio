import React from "react";
import SubHeading from "@/components/text/SubHeading";
import Tagline from "@/components/text/Tagline";
import { personalData } from "@/utils/data";
import BodyText from "@/components/text/BodyText";
import Link from "next/link";
import BorderBtn from "@/components/buttons/BorderBtn";
import FillBtn from "@/components/buttons/FillBtn";
import SocialLinks from "@/components/groups/SocialLinks";
import Profile from "@/components/Profile";

const BannerSection = () => {
  return (
    <>
      <div className="section p-10" id="home">
        <div className=" flex justify-between items-center space-x-10 md:space-x-4">
          <div className="pt-20 md:px-10">
            <BodyText>Hi, I'm</BodyText>
            <h1 className="text-clip bg-gradient-to-r from-orange-200 to-white">
              {personalData.name}
            </h1>
            <SubHeading>{personalData.role}</SubHeading>
            <BodyText>{personalData.intro}</BodyText>
            <div className="flex justify-center space-x-7 md:justify-start items-center">
              <BorderBtn>Contact me</BorderBtn>
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
          </div>
          <Profile
            img={personalData.imgLink}
            className="hidden md:block md:w-[100%] pt-10"
          />
          <div
            className="transform rotate-180 pb-20 md:pb-5 px-4"
            style={{ writingMode: "vertical-rl" }}
          >
            <Tagline>{personalData.tagline}</Tagline>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-10">
        <Profile img={personalData.imgLink} className="md:hidden w-[80%]" />
      </div>
    </>
  );
};

export default BannerSection;

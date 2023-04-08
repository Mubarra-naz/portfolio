import Image, { StaticImageData } from "next/image";
import React from "react";
import BodyText from "../text/BodyText";

type cardProps = {
  path: StaticImageData;
  text?: string;
};

const SkillCard = ({ path, text }: cardProps) => {
  return (
    <div className="flex space-x-2">
      <div className="bg-white w-[36px] h-[36px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md overflow-hidden">
        <Image src={path} alt="skill-icon" className="w-[50px]" />
      </div>
    </div>
  );
};

export default SkillCard;

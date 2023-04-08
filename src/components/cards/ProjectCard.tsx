import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsEyeFill, BsCodeSlash } from "react-icons/bs";
import FillBtn from "../buttons/FillBtn";
import SocialIcon from "../links/SocialIcon";
import Tagline from "../text/Tagline";

type projectProps = {
  title: string;
  category: string;
  img: StaticImageData;
  viewUrl: string | null;
  codeUrl: string | null;
};
const ProjectCard = ({
  title,
  category,
  img,
  viewUrl,
  codeUrl,
}: projectProps) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full md:w-[30%] md:h-auto rounded-xl group hover:bg-black/70 transition-all duration-300 overflow-hidden border-2 border-white/50 mt-12 md:mx-3">
      <Image
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 group-hover:scale-125 transition-all duration-500"
      />
      <div className="hidden group-hover:block absolute bottom-[10%] left-[10%] z-50">
        <h4 className="uppercase custom-gradient text-clip my-4">{title}</h4>
        <h5 className="my-3">{category}</h5>
        {/* <FillBtn>
          <Link href={viewUrl}>More Info</Link>
        </FillBtn> */}
      </div>
      <div className="hidden group-hover:block absolute top-[10%] right-[5%] z-50">
        {viewUrl && (
          <SocialIcon path={viewUrl} icon={<BsEyeFill size={32} />} />
        )}
      </div>
      <div className="hidden group-hover:block absolute top-[10%] left-[5%] z-50">
        {codeUrl && (
          <SocialIcon path={codeUrl} icon={<BsCodeSlash size={32} />} />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import Image from "next/image";
import BgBanner from "@/assets/images/about1.jpg";
import MainHeading from "@/components/text/MainHeading";
import { aboutData } from "@/utils/data";
import SubHeading from "@/components/text/SubHeading";
import BodyText from "@/components/text/BodyText";
import AboutCard from "@/components/cards/AboutCard";
import { useInView } from "react-intersection-observer";
import { inView, motion } from "framer-motion";
import { fadeIn } from "@/utils/framerMotion";

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className="section md:w-[90%] relative h-[100vh]" id="about" ref={ref}>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        className="md:px-20 z-10 w-full py-10 px-7"
      >
        <SubHeading>{aboutData.subTitle}</SubHeading>
        <MainHeading>{aboutData.title}</MainHeading>
        <BodyText>{aboutData.body}</BodyText>
        <div className="flex justify-start space-x-5 md:space-x-32 pt-3 md:pt-8">
          {aboutData.stats.map((item, index) => (
            <AboutCard
              text={item.text}
              val={item.val}
              title={item.head}
              inView={inView}
              key={index}
            />
          ))}
        </div>
      </motion.div>
      <Image
        src={BgBanner}
        alt="banner-img"
        className=" h-[90vh] opacity-30 rounded-r-full absolute top-16 shadow-orange-300 shadow-lg"
      />
    </div>
  );
};

export default AboutSection;

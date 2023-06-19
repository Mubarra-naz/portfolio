"use client";
import MainHeading from "@/components/text/MainHeading";
import SubHeading from "@/components/text/SubHeading";
import { contactData, personalData } from "@/utils/data";
import Image from "next/image";
import connectImg from "@/assets/images/connectImg.jpg";
import SocialLinks from "@/components/groups/SocialLinks";
import FillBtn from "@/components/buttons/FillBtn";
import InputField from "@/components/text/InputField";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framerMotion";

const ContactSection = () => {
  return (
    <div className="section p-10 md:p-20 mb-24" id="contact">
      <div className="flex flex-col md:flex-row space-y-20 md:space-x-5">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="md:max-w-[50%]"
        >
          <SubHeading>{contactData.subtitle}</SubHeading>
          <MainHeading>{contactData.title}</MainHeading>
          <Image src={connectImg} alt="contect-img" className="w-full" />
          <div className="border-t-2 border-white/30 mt-20">
            <h3 className=" py-4 capitalize">Connect with me</h3>
            <SocialLinks
              mail={personalData.contactLinks.email}
              twitter={personalData.contactLinks.twitter}
              linkedin={personalData.contactLinks.linkedin}
              github={personalData.contactLinks.github}
              className="text-white"
            />
          </div>
        </motion.div>
        <motion.form
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex-1 border rounded-3xl flex flex-col gap-y-6 pb-24 p-6 items-start"
        >
          <InputField text="Your Name" />
          <InputField text="Your Email Address" />
          <InputField text="Subject" />
          <textarea
            className="text-input resize-none mb-12"
            placeholder="Your Message"
          />
          <FillBtn>Send Message</FillBtn>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;

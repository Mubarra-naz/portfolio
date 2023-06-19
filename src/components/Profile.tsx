import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framerMotion";

const Profile = ({
  img,
  ...rest
}: {
  img: StaticImageData;
  [rest: string]: any;
}) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      {...rest}
    >
      <Image src={img} alt="profile" className="md:w-full" />
    </motion.div>
  );
};

export default Profile;

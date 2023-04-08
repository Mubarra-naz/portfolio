import React from "react";
import Image, { StaticImageData } from "next/image";

const Profile = ({
  img,
  ...rest
}: {
  img: StaticImageData;
  [rest: string]: any;
}) => {
  return (
    <div {...rest}>
      <Image src={img} alt="profile" className="md:w-full" />
    </div>
  );
};

export default Profile;

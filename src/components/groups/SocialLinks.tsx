import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SocialIcon from "../links/SocialIcon";

type socialLinksProps = {
  github: string;
  twitter: string;
  linkedin: string;
  mail: string;
  [rest: string]: any;
};

const SocialLinks = ({
  github,
  twitter,
  linkedin,
  mail,
  ...rest
}: socialLinksProps) => {
  return (
    <div className="flex justify-around md:justify-start space-x-4 pt-5">
      <SocialIcon icon={<FaGithub size={20} />} path={github} {...rest} />
      <SocialIcon icon={<FaTwitter size={20} />} path={twitter} {...rest} />
      <SocialIcon icon={<FaLinkedinIn size={20} />} path={linkedin} {...rest} />
      <SocialIcon icon={<AiOutlineMail size={20} />} path={mail} {...rest} />
    </div>
  );
};

export default SocialLinks;

import { ReactElement } from "react";
import LinkIcon from "./LinkIcon";
type iconProps = {
  icon: ReactElement;
  path: string;
  [rest: string]: any;
};

const SocialIcon = ({ path, icon, ...rest }: iconProps) => {
  return (
    <div className="rounded-full p-2 cursor-pointer hover:scale-125 ease-in duration-300 text-orange-300">
      <LinkIcon path={path} target="_blank" {...rest}>
        {icon}
      </LinkIcon>
    </div>
  );
};

export default SocialIcon;

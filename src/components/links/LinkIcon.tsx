import Link from "next/link";
import { ReactElement, ReactNode } from "react";

type iconProps = {
  path: string;
  children: ReactNode;
  [rest: string]: any;
};
const LinkIcon = ({ path, children, ...rest }: iconProps) => {
  return (
    <>
      <Link href={path || "#"} {...rest}>
        {children}
      </Link>
    </>
  );
};

export default LinkIcon;

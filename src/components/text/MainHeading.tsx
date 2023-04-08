import { ElementType } from "@/utils/types";

const MainHeading = ({ children }: ElementType) => {
  return <h2 className="py-8 text-orange-300 capitalize">{children}</h2>;
};

export default MainHeading;

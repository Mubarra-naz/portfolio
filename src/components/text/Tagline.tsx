import { ElementType } from "@/utils/types";

const Tagline = ({ children }: ElementType) => {
  return <h5 className="custom-gradient text-clip uppercase">{children}</h5>;
};

export default Tagline;

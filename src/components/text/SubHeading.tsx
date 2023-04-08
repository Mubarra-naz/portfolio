import { ElementType } from "@/utils/types";
import React from "react";

const SubHeading = ({ children }: ElementType) => {
  return (
    <h3 className="custom-gradient text-clip py-3 capitalize">{children}</h3>
  );
};

export default SubHeading;

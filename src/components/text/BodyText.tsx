import { ElementType } from "@/utils/types";
import React from "react";

const BodyText = ({ children }: ElementType) => {
  return <p className="py-3 max-w-max">{children}</p>;
};

export default BodyText;

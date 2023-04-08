import { ElementType } from "@/utils/types";
import React from "react";

const BorderBtn = ({ children }: ElementType) => {
  return (
    <button className="ring-4 ring-red-800 pill-btn my-2">{children}</button>
  );
};

export default BorderBtn;

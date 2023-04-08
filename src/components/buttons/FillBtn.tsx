import { ElementType } from "@/utils/types";
import React from "react";

const FillBtn = ({ children }: ElementType) => {
  return (
    <button className="pill-btn my-2 bg-gradient-to-r from-red-500 to-orange-300">
      {children}
    </button>
  );
};

export default FillBtn;

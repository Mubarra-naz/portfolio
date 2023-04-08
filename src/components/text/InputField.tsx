import React from "react";

const InputField = ({ text }: { text: string }) => {
  return <input className="text-input" type="text" placeholder={text} />;
};

export default InputField;

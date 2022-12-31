import React from "react";

const ButtonPrimary = ({ fullWidth, children }) => {
  return (
    <button
      className={`bg-primary ${
        fullWidth ? "w-full" : ""
      } rounded-[30px] text-white text-xs  px-6 py-3 md:px-14 md:py-3 md:text-lg font-medium md:font-semibold`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

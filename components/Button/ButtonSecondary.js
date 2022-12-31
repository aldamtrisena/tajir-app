import React from "react";

const ButtonSecondary = ({ fullWidth, children }) => {
  return (
    <button
      className={`bg-white hover:bg-gray-100 ${
        fullWidth ? "w-full" : ""
      } border border-primary  rounded-[30px] text-primary text-xs px-6 py-3 md:px-14 md:py-3 md:text-lg font-medium md:font-semibold`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;

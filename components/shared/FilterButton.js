import React from "react";
import Typography from "./Typography";

const FilterButton = ({ data = [], value, onChange, border }) => {
  return (
    <div className={`bg-white rounded-[50px] px-1 ${border ? "border border-primary" : ""}`}>
      <div className="flex py-1 justify-between items-center gap-4">
        {data.map((el, index) => {
          return (
            <div key={index} onClick={() => onChange(el.name)}>
              <button
                className={`px-12 ${
                  value === el.name ? "bg-gray-300 transition delay-400 duration-400 scale-100	" : ""
                } rounded-[50px] py-2`}
              >
                <Typography primary={value === el.name}>{el.name}</Typography>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButton;

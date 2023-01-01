import React from "react";
import Typography from "../shared/Typography";
import ButtonPrimary from "../Button/ButtonPrimary";

const CardEvent = ({ data }) => {
  return (
    <div
      className="bg-greenCard md:my-5 rounded-md px-4 py-3 my-2 md:flex md:items-center md:justify-between
    md:px-8 md:py-6"
    >
      <Typography xs>{data.hour}</Typography>
      <div className="mt-3">
        <Typography medium xs>
          {data.description}
        </Typography>
        <Typography xs className="text-gray-500 mt-1">
          {data.event}
        </Typography>
      </div>
      <div className="hidden md:block">
        <Typography medium xs>
          {data.trainer}
        </Typography>
        <Typography xs className="text-gray-500 mt-1">
          {data.nama_trainer}
        </Typography>
      </div>
      <div className="hidden md:block">
        <ButtonPrimary>Beli Tiket</ButtonPrimary>
      </div>
    </div>
  );
};

export default CardEvent;

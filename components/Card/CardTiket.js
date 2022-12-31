import React from "react";
import Typography from "../shared/Typography";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";

const CardTiket = ({ category, price }) => {
  return (
    <div className="md:w-64 w-56 md:h-52 h-[9rem] py-4 relative bg-white overflow-hidden">
      {/* draw ticket */}
      <div>
        <div className="ticket-container" />
        <div className="ticket-container-right" />
        <div className="ticket-container-mid" />
        <div className="ticket-container-mid-right" />
        <div className="ticket-container-bottom" />
        <div className="ticket-container-bottom-right" />
      </div>
      <div className="flex h-full flex-col items-center justify-between">
        <div>
          <Typography primary bold md center className="md:text-2xl">
            {category}
          </Typography>
          <Typography primary md className="mt-2 md:text-[2rem] md:mt-8">
            {price}
          </Typography>
        </div>
        <div className="w-full px-7">
          <ButtonSecondary fullWidth>Beli Tiket</ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default CardTiket;

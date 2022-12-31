import Image from "next/image";
import React from "react";
import Typography from "../shared/Typography";
import Photo from "public/image/people1.png";

const CardSecondary = ({ foto, nama, pekerjaan }) => {
  return (
    <div className="flex w-[134px] basis-2/5 md:basis-1/5 md:w-[240px] flex-col justify-center items-center cursor-pointer">
      <Image src={foto} alt={"foto"} />
      <div className="mt-2">
        <Typography xs medium>
          {nama}
        </Typography>
        {pekerjaan && (
          <Typography xs center>
            Pekerjaan
          </Typography>
        )}
      </div>
    </div>
  );
};

export default CardSecondary;

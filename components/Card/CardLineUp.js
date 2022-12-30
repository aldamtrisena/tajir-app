import Image from "next/image";
import React from "react";
import Typography from "../shared/Typography";
import Photo from "public/image/people1.png";

const CardLineUp = () => {
  return (
    <div className="flex w-[134px] basis-2/5 md:basis-1/5 md:w-[240px] flex-col justify-center items-center cursor-pointer">
      {/* <div className="w-[134px] md:w-[240px]"> */}
      <Image src={Photo} alt={"foto"} />
      {/* </div> */}
      <div className="mt-2">
        <Typography xs medium>
          Nama Pembicara
        </Typography>
        <Typography xs center>
          Pekerjaan
        </Typography>
      </div>
    </div>
  );
};

export default CardLineUp;

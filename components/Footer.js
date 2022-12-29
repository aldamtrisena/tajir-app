import Image from "next/image";
import React from "react";
import ImageLogo from "public/image/logo.png";
import Typography from "@/components/shared/Typography";

const Footer = () => {
  return (
    <footer className="w-full h-64 relative bg-secondary box-border flex justify-between p-6 md:px-24 md:py-8">
      <div>
        <Image
          src={ImageLogo}
          alt={"logo"}
          width={80}
          style={{ position: "relative", left: "-10px", marginBottom: "10px" }}
        />
        <Typography bold>Jakarta</Typography>
        <Typography sm thin className="mt-4">
          JI. M.H. Thamrin, no 31 Jakarta 10230 <br /> +62 21 392 3189
        </Typography>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
};

export default Footer;

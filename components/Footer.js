import Image from "next/image";
import React from "react";
import ImageLogo from "public/image/logo.png";
import Typography from "@/components/shared/Typography";
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div
        className="w-full md:h-64 relative justify-around box-border flex md:justify-between 
      p-6 md:px-24 md:py-8 xl:max-w-screen-xl xl:mx-auto"
      >
        <div className="hidden md:block">
          <Image
            src={ImageLogo}
            alt={"logo"}
            width={80}
            style={{ position: "relative", left: "-10px", top: "-10px", marginBottom: "10px" }}
          />
          <Typography bold>Jakarta</Typography>
          <Typography sm thin className="mt-4">
            JI. M.H. Thamrin, no 31 Jakarta 10230 <br />
            <span>+62 21 392 3189</span>
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography bold>Tentang Tajir</Typography>
          <Typography>About us</Typography>
          <Typography>Contact us</Typography>
          <Typography>Beli Tiket</Typography>
        </div>
        <div>
          <Typography bold>Sosial Media</Typography>
          <div className="flex gap-4 mt-4">
            <Facebook color={"blacked"} />
            <Twitter color={"blacked"} />
            <Instagram color={"blacked"} />
            <YouTube color={"blacked"} />
            <LinkedIn color={"blacked"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

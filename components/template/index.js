import React from "react";
import Navbar from "@/components/Navbar";
import ResponsiveAppBar from "../AppBar";
import Footer from "@/components/Footer";

const Template = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Template;

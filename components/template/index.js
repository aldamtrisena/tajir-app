import React from "react";
import Navbar from "@/components/Navbar";
import ResponsiveAppBar from "../AppBar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;

import React from "react";
import Button from "@mui/material/Button";

const Link = ({ isActive, children }) => {
  return <Button sx={{ color: `${isActive ? "#840A8B" : "#353535"}` }}>{children}</Button>;
};

export default Link;

import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

const TextLink = ({ isActive, href, style, children }) => {
  return (
    <Link href={href}>
      <Button sx={{ color: `${isActive ? "#840A8B" : "#353535"}`, textTransform: "unset", ...style }}>
        {children}
      </Button>
    </Link>
  );
};

export default TextLink;

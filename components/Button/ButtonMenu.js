import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Menu, MenuItem } from "@mui/material";
import Typography from "@/components/shared/Typography";

const pages = ["Productssdsd sdsd", "Pricing"];

const ButtonMenu = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <button
        onClick={handleOpenNavMenu}
        className="bg-transparent border-primary border rounded-[30px]
         text-primary text-xs  px-4 w-40 md:w-auto box-border py-3 md:px-14 
         md:py-3 md:text-lg font-medium md:font-semibold"
      >
        {children} <ExpandMoreIcon />
      </button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            maxHeight: "180px",
            minWidth: "150px",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography className={"hover:text-red-300"}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ButtonMenu;

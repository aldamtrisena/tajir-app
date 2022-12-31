import { useState } from "react";
import Image from "next/image";
import ImageLogo from "public/image/logo.png";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonPrimary from "./Button/ButtonPrimary";
import TextLink from "@/components/shared/Link";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
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
    <nav className="z-50 fixed box-border px-4 w-full top-4 md:px-8">
      <div className="flex justify-between items-center py-1 w-[100%] bg-white shadow-md px-3 md:px-12 rounded-lg">
        <div>
          <div className="w-14 md:w-20">
            <Image src={ImageLogo} alt={"logo tajir"} />
          </div>
        </div>
        <div className="gap-16 hidden md:flex">
          <TextLink isActive href="#">
            Beranda
          </TextLink>
          <TextLink href="#">Tentang</TextLink>
          <TextLink href="#">Workshop</TextLink>
          <TextLink href="#">FAQ</TextLink>
        </div>
        <div className="flex">
          <ButtonPrimary>Beli Tiket</ButtonPrimary>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

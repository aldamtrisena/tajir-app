import { useState } from "react";
import Image from "next/image";
import ImageLogo from "public/image/logo.png";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonPrimary from "./Button/ButtonPrimary";
import Link from "@/components/shared/Link";

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
    <nav maxWidth="lg" fixed className=" fixed box-border px-4 w-full top-4 md:px-8">
      <div className="flex justify-between items-center py-0 w-[100%] bg-white shadow-md px-3 md:px-12 rounded-lg">
        <div>
          <Image src={ImageLogo} alt={"logo tajir"} width={80} height={30} />
        </div>
        <div className="gap-16 hidden md:flex">
          <Link isActive>Beranda</Link>
          <Link>Tentang</Link>
          <Link>Workshop</Link>
          <Link>FAQ</Link>
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

import { useState } from "react";
import Image from "next/image";
import ImageLogo from "public/image/logo.png";
import Button from "@mui/material/Button";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonPrimary from "./Button/ButtonPrimary";
import TextLink from "@/components/shared/Link";
import { useRouter } from "next/router";

const pages = [
  { page: "Beranda", route: "/" },
  { page: "Tentang", route: "/about" },
  { page: "Workshop", route: "/workshop" },
  { page: "Faq", route: "/faq" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const { pathname } = useRouter();
  const current_path = pathname.split("/").join("");
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
    <header className="z-50 fixed box-border px-4 top-4 left-0 right-0 h-auto md:px-8">
      <div
        className="flex justify-between items-center py-1 w-[100%] bg-white 
      shadow-md px-3 md:px-12 rounded-lg mx-auto 2xl:max-w-screen-2xl"
      >
        <div>
          <div className="w-14 md:w-16">
            <Image src={ImageLogo} alt={"logo tajir"} />
          </div>
        </div>
        <div className="gap-16 hidden md:flex">
          <TextLink isActive={current_path === ""} href="/">
            Beranda
          </TextLink>
          <TextLink href="/about" isActive={current_path === "about"}>
            Tentang
          </TextLink>
          <TextLink href="/workshop" isActive={current_path === "workshop"}>
            Workshop
          </TextLink>
          <TextLink href="/faq" isActive={current_path === "faq"}>
            FAQ
          </TextLink>
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
              {pages.map((el, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <TextLink href={el.route} isActive={pathname === el.route}>
                    {el.page}
                  </TextLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

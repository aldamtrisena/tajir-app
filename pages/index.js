import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Template from '@/components/template';
import BgImage from 'public/image/imagebg.png'

export default function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Template>
      <div
        className="bg-scroll bg-red-50 bg-home_page h-screen w-full "
      >
      </div>
    </Template>
  );
}
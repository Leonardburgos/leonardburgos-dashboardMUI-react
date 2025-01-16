import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { blue, blueGrey } from '@mui/material/colors';

const Header = ({ isSidebarOpen, toggleSidebar }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: blueGrey, // Gradient with percentage stops
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleSidebar}
        sx={{ marginRight: 2 }}
      >
        {isSidebarOpen ? <ArrowBackIcon /> : <MenuIcon />}
      </IconButton>
      <Typography variant="h6" noWrap>
        Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

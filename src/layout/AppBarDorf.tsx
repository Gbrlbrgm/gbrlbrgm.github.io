import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import "./AppBarDorf.css"

export default function AppBarDorf() {
  return (
    <div className="Header">
      <MenuIcon className="Icon" />
      <h6 className="Title">DORF</h6>
      <HelpIcon className="Icon" />
    </div>
  );
}

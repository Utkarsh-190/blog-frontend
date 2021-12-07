import * as React from "react";
import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variand="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>

      <Box className={classes.hero}>
        <Box>React blog</Box>
      </Box>
    </>
  );
}

export default Navbar;

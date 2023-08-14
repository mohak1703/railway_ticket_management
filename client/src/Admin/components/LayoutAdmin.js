import React from 'react';
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutAdmin = ({ isAuth, setAuth }) => {
  return (
    <div>
        <CssBaseline />
        <Navbar />        
        <Outlet />
    </div>
  )
}

export default LayoutAdmin;
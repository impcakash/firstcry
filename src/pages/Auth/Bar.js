import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Bar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItem: "center",
        color: "blue",
        backgroundColor: "pink",
        padding: "10px",
        width: "30%",
      }}
    >
      <NavLink style={{ textDecoration: "none", color: "black" }} to="/login">
        <p style={{ padding: "10px" }}>Login</p>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black" }}
        to="/register"
      >
        <p style={{ padding: "10px" }}>Sign Up</p>
      </NavLink>
    </Box>
  );
};

export default Bar;

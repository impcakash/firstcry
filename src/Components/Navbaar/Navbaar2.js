import { AppBar, styled, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  height: "30px",
  width: "100%",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#ffd91c",
});

const StyledToolbar2 = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  height: "30px",
  width: "100%",
  "::-webkit-scrollbar": {
    display: "none",
    backgroundColor: "#ffd91c",
  },
});

const StyleAppbar = styled("AppBar")({
  width: "100%",
  overflow: "scroll",
});

const Navbaar2 = () => {
  return (
    <>
      <AppBar
        sx={{ marginTop: "65px", display: { xs: "none", sm: "block" } }}
        color="primary"
      >
        <StyledToolbar>
          <NavLink to="/product">
            {" "}
            <p style={{ padding: "10px", color: "black" }}>KIDS</p>
          </NavLink>
          <p style={{ padding: "10px" }}>GEAR</p>
          <p style={{ padding: "10px" }}>BATH</p>
          <p style={{ padding: "10px" }}>HEALTH</p>
          <p style={{ padding: "10px" }}>NURSERY</p>
          <p style={{ padding: "10px" }}>PARENTING</p>
          <p style={{ padding: "10px" }}>FEEDING</p>
          <p style={{ padding: "10px" }}>MOM</p>
          <p style={{ padding: "10px" }}>FOOTWEAR</p>
          <p style={{ padding: "10px" }}>DIAPERING</p>
          <p style={{ padding: "10px" }}>TOYS</p>
        </StyledToolbar>
      </AppBar>

      <StyleAppbar
        sx={{ marginTop: "65px", display: { xs: "block", sm: "none" } }}
        color="primary"
      >
        <StyledToolbar2>
          <NavLink to="/product">
            {" "}
            <p style={{ padding: "10px", color: "black" }}>KIDS</p>
          </NavLink>
          <p style={{ padding: "12px" }}>GEAR</p>
          <p style={{ padding: "12px" }}>BATH</p>
          <p style={{ padding: "12px" }}>HEALTH</p>
          <p style={{ padding: "12px" }}>NURSERY</p>
          <p style={{ padding: "12px" }}>PARENTING</p>
          <p style={{ padding: "12px" }}>FEEDING</p>
          <p style={{ padding: "12px" }}>MOM</p>
          <p style={{ padding: "12px" }}>FOOTWEAR</p>
          <p style={{ padding: "12px" }}>DIAPERING</p>
          <p style={{ padding: "12px" }}>TOYS</p>
        </StyledToolbar2>
      </StyleAppbar>
    </>
  );
};

export default Navbaar2;

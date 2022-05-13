import React from "react";
import styled from "@emotion/styled";
import TopBrands from "./TopBrands";
import { Typography } from "@mui/material";

const DIV = styled(Typography)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#ffffff",
  width: "90%",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  margin: "auto",
  marginTop: "50px",
});

const DIV2 = styled(Typography)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#ffffff",
  width: "90%",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
});

function MiddleContent() {
  return (
    <>
      <DIV variant="div" sx={{ display: { xs: "none", sm: "block" } }}>
        <img width={"100%"} src="" alt="" />
      </DIV>

      {/* for responsive */}
      <DIV variant="div" sx={{ display: { xs: "block", sm: "none" } }}>
        <img width={"100%"} src="" alt="" />
      </DIV>
      <TopBrands />
    </>
  );
}

export default MiddleContent;

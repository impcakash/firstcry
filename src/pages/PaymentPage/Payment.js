import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const StyleBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "40px",
  backgroundColor: "pink",
});

function Payment() {
  const data1 = useSelector((state) => state.cart);
  return (
    <>
      {data1.map((d) => (
        <StyleBox>Your order is successfully Placed</StyleBox>
      ))}
    </>
  );
}

export default Payment;

import React from "react";
import styled from "@emotion/styled";
import brandimg from "./brandsImg";

const DIV = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#ffffff",
  margin: "auto",
  width: "90%",
  flexWrap: "wrap",
  gap: "20px",
});

function TopBrands() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Top Brands</h2>

      <DIV>
        {brandimg.map((items) => (
          <div
            style={{
              flexBasis: "48%",
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.3)",
              marginTop: "20px",
            }}
          >
            <img width={"100%"} src={items.title} alt="" key={items.id} />
          </div>
        ))}
      </DIV>
    </>
  );
}

export default TopBrands;

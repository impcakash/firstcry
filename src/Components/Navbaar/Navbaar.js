import React from "react";
import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StyledBadge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useAuth } from "../../pages/Auth/firebase";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  marginLeft: "20px",
  width: "75%",
}));

const Navbaar = () => {
  const data1 = useSelector((state) => state.cart);
  const user = useAuth();

  //console.log(data1);

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <StyledToolbar>
            <Typography variant="div">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <img
                  width={"70px"}
                  src="https://cdn.fcglcdn.com/brainbees/images/n/India_shopping_1080x1080.webp"
                  alt=""
                />
              </NavLink>
            </Typography>

            <Search style={{ border: "1px solid purple", borderRadius: "5px" }}>
              <InputBase placeholder="Search for a Category ..." />
            </Search>

            <Typography
              variant="span"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <StyledToolbar sx={{ width: "150%", fontSize: "15px" }}>
                <p style={{ padding: "10px", fontSize: "14px" }}>
                  <b>Stores & Preschools</b>
                </p>
                <p style={{ padding: "10px", fontSize: "14px" }}>
                  <b> Support</b>
                </p>
                <p style={{ padding: "10px", fontSize: "14px" }}>
                  <b>Track Order</b>{" "}
                </p>
                <p style={{ padding: "10px", fontSize: "14px" }}>
                  <b> FirstCry Parenting</b>
                </p>
                <p style={{ padding: "10px", fontSize: "14px" }}>
                  <b> Select location</b>
                </p>
              </StyledToolbar>
            </Typography>
          </StyledToolbar>

          <StyledToolbar sx={{ width: "16%" }}>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button
                sx={{ color: "black", fontFamily: "san-serif" }}
                startIcon={user ? <VerifiedIcon /> : <PersonIcon />}
                variant="text"
              >
                Account
              </Button>
            </NavLink>

            <IconButton aria-label="cart">
              <Link to="/product/cart">
                {" "}
                <StyledBadge badgeContent={data1.length} color="neutral">
                  <LocalMallIcon color="otherColor" />
                </StyledBadge>
              </Link>
            </IconButton>
          </StyledToolbar>
        </StyledToolbar>
      </AppBar>

      {/* Responsive navbaar */}

      <AppBar
        sx={{ display: { xs: "block", sm: "none" }, maxWidth: "100%" }}
        color="primary"
        position="fixed"
      >
        <StyledToolbar>
          <Typography variant="div">
            <img
              width={"40px"}
              src="https://cdn.fcglcdn.com/brainbees/images/n/India_shopping_1080x1080.webp"
              alt=""
            />
          </Typography>

          <StyledToolbar sx={{ width: "55%" }}>
            <SearchIcon />
            <Button
              sx={{ color: "black", fontFamily: "san-serif" }}
              startIcon={<PersonIcon />}
              variant="text"
            >
              .
            </Button>

            <IconButton aria-label="cart">
              <Link to="/product/cart">
                {" "}
                <StyledBadge badgeContent={data1.length} color="neutral">
                  <LocalMallIcon color="otherColor" />
                </StyledBadge>
              </Link>
            </IconButton>
          </StyledToolbar>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbaar;

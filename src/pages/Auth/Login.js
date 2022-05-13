import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";
import { InputBase } from "@mui/material";
import { useAuth, login } from "./firebase";
import { useRef, useState } from "react";
import Bar from "./Bar";
import { Link } from "react-router-dom";

const StyleBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "40px",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "pink",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  minWidth: "250px",
}));

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentUser = useAuth();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(email, password);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <>
      {!currentUser && (
        <StyleBox>
          <Bar />
          <p
            style={{
              fontFamily: "sarif",
              fontSize: "25px",
              color: "coral",
            }}
          >
            Login
          </p>
          <Search>
            <InputBase
              sx={{ width: "100%" }}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Email"
              type="email"
            />
          </Search>
          <Search>
            <InputBase
              sx={{ width: "100%" }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Password"
              type="password"
            />
          </Search>
          <Button
            disabled={loading || currentUser}
            onClick={handleLogin}
            variant="contained"
            sx={{ backgroundColor: "teal" }}
          >
            Login
          </Button>
          <Link to="/">Go to home page</Link>
        </StyleBox>
      )}
    </>
  );
}

export default Login;

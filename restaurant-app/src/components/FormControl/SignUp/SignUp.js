import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = ({ setEmail, setPassword, handleSignUp, setUserName }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>this is sign in page</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-input"
          label="Enter Your Name"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
      </Box>
      <Button variant="contained" size="large" onClick={handleSignUp}>
        Sign Up
      </Button>
      <p>or</p>
      <Link to="/form/signin">sign in</Link>
    </div>
  );
};

export default SignUp;

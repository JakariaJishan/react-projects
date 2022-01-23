import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SignIn = () => {
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
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <br />
      </Box>
      <Button variant="contained" size="large">
        Sign In
      </Button>
      <p>or</p>
      <Button variant="outlined" size="large">
        Sign Up
      </Button>
    </div>
  );
};

export default SignIn;

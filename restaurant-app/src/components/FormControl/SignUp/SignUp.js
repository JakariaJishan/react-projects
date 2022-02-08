import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = ({ setEmail, setPassword, handleSignUp, setUserName }) => {
  return (
    <div style={{ textAlign: "center" , margin:'2rem'}}>
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
          color="warning"

          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
          color="warning"

          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          color="warning"

          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" fullWidth size="large" style={{background:'rgb(237, 108, 2)'}} onClick={handleSignUp}>
        Sign Up
      </Button>
      </Box>
      
      <span>or Have an account? </span>
      <Link to="/form/signin" style={{textDecoration:'underline', color:'rgb(237 108 2)'}}>Sign In</Link>
    </div>
  );
};

export default SignUp;

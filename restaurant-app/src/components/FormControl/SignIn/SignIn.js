import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = ({setEmail, setPassword, handleSignIn}) => {
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
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
          color="warning"

          onChange={(e)=> setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          color="warning"
          autoComplete="current-password"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" size="large" style={{background:'rgb(237, 108, 2)'}}  fullWidth onClick={handleSignIn}>
        Sign In
      </Button>
      </Box>
      <span>or Don't have an account?</span>
      <Link to='/form/signup' style={{textDecoration:'underline',color:'rgb(237 108 2)'}}> create a new account</Link>
    </div>
  );
};

export default SignIn;

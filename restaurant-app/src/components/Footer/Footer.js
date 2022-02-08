import { Button, TextField } from "@mui/material";
import React from "react";
import logo3 from '../../images/logo3.png';
const Footer = () => {
  return (
    <div style={{ background: "#ddd" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "60%",
          margin: "2rem auto 0",
          padding: "2rem",
        }}
      >
        <div>
          <img src={logo3} alt="" />
        </div>
        <div>
              <h1>Subscribe our restaurant</h1>
          <TextField
            fullWidth
            color="warning"
            id="standard-basic"
            label="Subscribe"
            variant="filled"
          />
          <Button
            onClick={() => alert("successfully subscribed!")}
            variant="contained"
            color="warning"
            fullWidth
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

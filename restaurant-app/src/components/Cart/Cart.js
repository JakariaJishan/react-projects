import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Fab, TextField } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decrementCart,
  incrementCart,
  removeFromCart
} from "../../Redux/Actions/Actions";
import "./Cart.css";
const Cart = (props) => {
  let navigate = useNavigate();
  const { cart, removeFromCart, incrementCart, decrementCart } = props;
  let totalPrice = 0;
  let cartPrices = cart.map((ele) => ele.price * ele.quantity);
  for (let i = 0; i < cartPrices.length; i++) {
    const element = cartPrices[i];
    totalPrice = totalPrice + element;
  }

  const [address, setAddress] = useState("");
  const [road, setRoad] = useState("");
  const [contact, setContact] = useState("");
  const [delivery, setDelivery] = useState("");
  const [disabled, setDisabled] = useState("");
  const handleClick = () => {
    setDisabled("true");
  };
  return (
    <div>
      {cart.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "1rem",
            margin: "3rem auto",
            width: "70%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Address"
                variant="filled"
                onChange={(e) => setAddress(e.target.value)}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Road No"
                type='number'
                variant="filled"
                onChange={(e) => setRoad(e.target.value)}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Contact No"
                type='number'
                variant="filled"
                onChange={(e) => setContact(e.target.value)}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Add delivery instructions"
                variant="filled"
                onChange={(e) => setDelivery(e.target.value)}
              />
              <br />
              {address && road && contact && delivery !== "" ? (
                <Button
                  variant="contained"
                  style={{ background: "rgb(237, 108, 2)" }}
                  onClick={handleClick}
                  fullWidth
                >
                  Save & Continue
                </Button>
              ) : (
                <Button
                  variant="contained"
                  style={{ background: "#CECECE" }}
                  disabled
                  fullWidth
                >
                  Save & Continue
                </Button>
              )}
            </Box>
          </div>
          <div>
            {cart.map((pd) => (
              <div
                key={Math.random()}
                style={{
                  background: "#F5F5F5",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "10px",
                  margin: "1rem",
                  padding: "1rem",
                  borderRadius: "15px",
                  position: "relative",
                }}
              >
                <img src={pd.img} alt="food" width="20%" height="20%" />
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  <span>{pd.name}</span>
                  <p>
                    <span
                      style={{
                        fontSize: "24px",
                        color: "#ed6c02",
                        fontWeight: "bold",
                      }}
                    >
                      ${(pd.price * pd.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {" "}
                  <Fab size="small" color="dark" aria-label="add">
                    <RemoveIcon
                      onClick={() => decrementCart(pd.id, pd.quantity)}
                    />
                  </Fab>
                  <span style={{ margin: "0 1rem ", fontSize: "30px" }}>
                    {pd.quantity}
                  </span>
                  <Fab size="small" color="dark" aria-label="add">
                    <AddIcon
                      onClick={() => incrementCart(pd.id, pd.quantity)}
                    />
                  </Fab>
                </div>

                <DeleteOutlineIcon
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "red",
                  }}
                  onClick={() => removeFromCart(pd.id)}
                />
              </div>
            ))}
            <div style={{ textAlign: "center" }}>
              <h1>Total: ${totalPrice.toFixed(2)}</h1>

              <Button
                variant="contained"
                disabled={!disabled }
                style={{ background: "#CECECE" }}
              >
                <Link to="/final-order" > Place Order</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "80%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          {" "}
          <p style={{ fontSize: "60px" }}>Oops! There is no items</p>
          <Button
            variant="contained"
            style={{ background: "#ed6c02" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </Button>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
  incrementCart: incrementCart,
  decrementCart: decrementCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

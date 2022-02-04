import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Fab, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeFromCart
} from "../../Redux/Actions/Actions";
import "./Cart.css";
const Cart = (props) => {
  const { cart, removeFromCart, incrementCart, decrementCart } = props;
  let totalPrice = 0;
  let cartPrices = cart.map((ele) => ele.price * ele.quantity);
  for (let i = 0; i < cartPrices.length; i++) {
    const element = cartPrices[i];
    totalPrice = totalPrice + element;
  }
  return (
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
          <TextField id="standard-basic" label="Address" variant="standard" />
          <br />
          <TextField id="standard-basic" label="Road No" variant="standard" />
          <br />
          <TextField
            id="standard-basic"
            label="Contact No"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Add delivery instructions"
            variant="standard"
          />
          <br />
          <Button
            variant="contained"
            style={{ background: "rgb(237, 108, 2)" }}
          >
            Save & Continue
          </Button>
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
                <RemoveIcon onClick={() => decrementCart(pd.id, pd.quantity)} />
              </Fab>
              <span style={{ margin: "0 1rem ", fontSize: "30px" }}>
                {pd.quantity}
              </span>
              <Fab size="small" color="dark" aria-label="add">
                <AddIcon onClick={() => incrementCart(pd.id, pd.quantity)} />
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
        <div style={{textAlign:'center'}}>
          <h1>Total: ${totalPrice.toFixed(2)}</h1>
          <Button variant="contained" disabled style={{background: 'rgb(237, 108, 2)'}}>Place Order</Button>
        </div>
      </div>
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

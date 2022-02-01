import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Fab } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addToCart,
  decrementCart,
  incrementCart
} from "../../Redux/Actions/Actions";
import "./ShowDetails.css";

const ShowDetails = (props) => {
  const { productId } = useParams();
  const { products, addToCart, cart, incrementCart, decrementCart } = props;
  return (
    <div>
      {products
        .filter((x) => x.id == productId)
        .map((pd) => (
          <div key={pd.id} className="main-showDetails">
            <div className="showDetais">
              <h1 style={{ fontSize: "75px" }}>{pd.title}</h1>
              <p>{pd.desc}</p>
              <p> Price: ${pd.price}</p>
              {cart.map((curEle) =>
                curEle.id === pd.id ? (
                  <div
                    key={curEle.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "35px", marginRight: "2rem" }}>
                      ${(curEle.price * curEle.quantity).toFixed(2)}
                    </div>
                    <div>
                      <Fab size="small" color="dark" aria-label="add">
                        <RemoveIcon
                          onClick={() =>
                            decrementCart(curEle.id, curEle.quantity)
                          }
                        />
                      </Fab>
                      <span style={{ margin: "0.5rem 1rem" }}>
                        {curEle.quantity}
                      </span>
                      <Fab size="small" color="dark" aria-label="add">
                        <AddIcon
                          onClick={() =>
                            incrementCart(curEle.id, curEle.quantity)
                          }
                        />
                      </Fab>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}

              {cart.some((ele) => ele.id === pd.id) ? (
                <Link to="/cart">
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "1rem",
                      background: "#f19346",
                      color: "white",
                    }}
                  >
                    go to cart
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="contained"
                  style={{ background: "#f19346" }}
                  onClick={() =>
                    addToCart(pd.id, pd.title, pd.price, pd.quantity)
                  }
                >
                  add to cart
                </Button>
              )}
            </div>
            <div className="showDetails-img">
              <img style={{ width: "80%" }} src={pd.img} alt="sz" />
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products, cart: state.cart };
};
const mapDispatchToProps = {
  addToCart: addToCart,
  incrementCart: incrementCart,
  decrementCart: decrementCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails);

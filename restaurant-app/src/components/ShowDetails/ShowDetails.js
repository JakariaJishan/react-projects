import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  decrementCart,
  incrementCart
} from "../../Redux/Actions/Actions";

const ShowDetails = (props) => {
  const { productId } = useParams();
  const { products, addToCart, cart, incrementCart, decrementCart } = props;
  return (
    <div>
      thisis details page
      {products
        .filter((x) => x.id == productId)
        .map((pd) => (
          <div key={pd.id}>
            <h1>{pd.title}</h1>
            <p>{pd.price}</p>
            {cart.map((curEle) =>
              curEle.id === pd.id ? (
                <div key={curEle.id}>
                  <p>{curEle.price * curEle.quantity}</p>
                  <button onClick={() => decrementCart(curEle.id, curEle.quantity)}>
                    -
                  </button>
                  <span>{curEle.quantity}</span>
                  <button onClick={() => incrementCart(curEle.id, curEle.quantity)}>
                    +
                  </button>
                </div>
              ) : (
                ""
              )
            )}
            {cart.some((ele) => ele.id === pd.id) ? (
              <button disabled>cart added</button>
            ) : (
              <button
                onClick={() =>
                  addToCart(pd.id, pd.title, pd.price, pd.quantity)
                }
              >
                cart
              </button>
            )}
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

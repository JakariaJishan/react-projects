import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
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
              <h1 style={{fontSize: '75px'}}>{pd.title}</h1>
              <p>{pd.desc}</p>
              <p> price: ${pd.price}</p>
              {cart.map((curEle) =>
                curEle.id === pd.id ? (
                  <div key={curEle.id}>
                    <p>Total Price: ${curEle.price * curEle.quantity}</p>
                    <button
                      onClick={() => decrementCart(curEle.id, curEle.quantity)}
                    >
                      -
                    </button>
                    <span>{curEle.quantity}</span>
                    <button
                      onClick={() => incrementCart(curEle.id, curEle.quantity)}
                    >
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
            <div className="showDetails-img">
              <img style={{width: '80%'}} src={pd.img} alt="sz" />
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

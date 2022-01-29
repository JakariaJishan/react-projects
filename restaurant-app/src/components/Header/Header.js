import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const { cart } = props;
  return (
    <div className="main-header">
      <div className="header">
        <div>
          <h1>tfood</h1>
        </div>
        <div className="header-left">
          <Link to={"/"}>Home</Link>
          <Link to={"/about-us"}> About us </Link>
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <sup> {cart.length}</sup>
          </Link>
          <Link to={"/form/signin"} className="header-signIn">
            Sign in
          </Link>
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
export default connect(mapStateToProps, null)(Header);

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const { cart } = props;
  let accessToken = sessionStorage.getItem("access token");
  let displayName = sessionStorage.getItem("display name");
  let navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("access token");
    sessionStorage.removeItem("display name");
    navigate("/form/signin");
  };
  return (
    <div className="main-header">
      <div className="header">
        <div>
          <h1>tfood</h1>
        </div>
        <div className="header-left">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : {}
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : {}
            }
          >
            about
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : {}
            }
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <sup> {cart.length}</sup>
          </NavLink>

          {accessToken ? (
            <div>
              <span style={{fontSize:'30px', fontWeight:'bold', marginRight:'1rem'}}>{displayName}</span>
              <Button onClick={handleLogOut}>log out</Button>
            </div>
          ) : (
            <Link to={"/form/signin"} className="header-signIn">
              Sign in
            </Link>
          )}
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

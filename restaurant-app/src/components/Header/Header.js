import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
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
          <h1>
            <Link to="/" style={{color:'#ed6c02'}}>T-Food</Link>
          </h1>
        </div>
        <div
          className="header-left"
        >
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ed6c02",
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
                    color: "#ed6c02",
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
                    color: "#ed6c02",
                  }
                : {}
            }
          >
            <ShoppingCartCheckoutIcon/>
            <sup> {cart.length}</sup>
          </NavLink>
        </div>
        <div >
          {accessToken ? (
            <div>
              <span
                style={{
                  color: "#ed6c02",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {displayName}
              </span>
              <Button style={{ color: "black" }} onClick={handleLogOut}>
                <LogoutIcon />
              </Button>
            </div>
          ) : (
            <Link to={"/form/signin"} className="header-signIn">
              <LoginIcon />
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

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo3 from '../../images/logo3.png';
import "./Header.css";

const Header = (props) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

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
            <Link to="/" style={{ color: "#ed6c02" }}>
             <img src={logo3} alt="logo3" width=''/>
            </Link>
          </h1>
        </div>
        <div className="header-left">
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
            to="/products"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#ed6c02",
                  }
                : {}
            }
          >
            Products
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
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            
             
          </NavLink>
        </div>
        <div>
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
               <Button variant="contained" color="warning">Sign Out</Button>
              </Button>
            </div>
          ) : (
            <Link to={"/form/signin"} className="header-signIn">
               <Button variant="contained" color="warning">Sign In</Button>
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

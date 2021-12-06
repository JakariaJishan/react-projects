import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  let { name } = props.user;
  let userStyle = {
    border: "1px solid black",
    margin: "1rem",
    padding: "1rem",
  };
  return (
    <div >
      <div style={userStyle}>
        <p>
          <strong>country: </strong>
          {name.common}
        </p>
        
        <Link to={`/country/${name.common}`}>show details {name.common}</Link>
      </div>
    </div>
  );
};

export default User;

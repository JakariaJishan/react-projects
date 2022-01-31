import { faHamburger, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import containPic from '../../Food-Meat-PNG-1200x960.png';
import './Contain.css';
const Contain = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/products')
  }
  return (
    <div className="contain">
      <div className="contain-text">
        <h1>
          GOOD F<FontAwesomeIcon icon={faHamburger} />
          <FontAwesomeIcon icon={faHamburger} />D
        </h1>
        <h1>
          GOOD M<FontAwesomeIcon icon={faSmileWink} />
          <FontAwesomeIcon icon={faSmileWink} />D
        </h1>
        <p>
          The food palace is an neighborhood restaurent serving seasonal global
          cuisine driven by the faire.
        </p>
        <Button variant="contained"  style={{background:'black'}} onClick={handleClick}>Explore more</Button>
      </div>
      <div className="contain-img">
          <img src={containPic} alt="" />
      </div>
    </div>
  );
};

export default Contain;

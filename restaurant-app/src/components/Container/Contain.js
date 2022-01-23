import { faHamburger, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import containPic from '../../Food-Meat-PNG-1200x960.png';
import './Contain.css';
const Contain = () => {
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
        <Link to={'/products'}>Explore more</Link>
      </div>
      <div className="contain-img">
          <img src={containPic} alt="" />
      </div>
    </div>
  );
};

export default Contain;

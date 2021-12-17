import React from "react";
import { data } from "../../Data";
import FoodBar from "./FoodBar/FoodBar";
import './FoodBar/FoodBar.css';
import Header from "./Header/Header";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="food">
      {data.map((ele) => (
        <FoodBar key={ele.id} food={ele}></FoodBar>
      ))}
      </div>
      
    </div>
  );
};

export default Home;

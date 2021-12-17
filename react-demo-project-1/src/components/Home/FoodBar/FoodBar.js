import React, { useState } from 'react';
import './FoodBar.css';
const FoodBar = (props) => {
    const {id, title, price, category, img} = props.food;
    const [food, setFood] = useState({});
    let handleCart=(x) => {
        setFood(x.food);
        console.log(food.title);
    }
    return (
        <div >
           <div >
               <h5>{title}</h5>
               <p>${price}</p>
               <p>{category}</p>
               <button onClick={()=> handleCart(props)}>--</button>
           </div>
            
        </div>
    );
};

export default FoodBar;
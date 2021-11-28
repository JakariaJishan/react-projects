import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import "./Courses.css";

const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch(
      "https://mocki.io/v1/7c52b8b8-8130-49b0-a8ae-fbb50b9bf565?fbclid=IwAR1gnUZl-7jtLv_dEq2HaCrVqS-YncU_Gjd68iOAIu1vJJ_nQ5H4zjnM7JA"
    )
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

  let [cart, setCart] = useState([]);

  let handleAddToCart = (amount) => {
    setCart([...cart, amount]);
  };
  

  return (
    <div className="division">
      <div className="course-body">
        {course.map((pro) => (
          <Shop
            course={pro}
            handleAddToCart={handleAddToCart}
            key={pro.id}
          ></Shop>
        ))}
      </div>
      <div >
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Courses;

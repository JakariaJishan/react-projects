import React from "react";
import Contain from "../Container/Contain";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import RecipeReviewCard from "../ReceipeCardReview/ReceipeCardReview";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "auto",
        }}
      >
        <Contain></Contain>
        <Products></Products>
        <RecipeReviewCard />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { shop } from "../../Context/Context";
import Filter from "../Filter/Filter";
import SinglePage from "../SinglePage/SinglePage";
import "./Home.css";
const Home = () => {
  // const x =ShopState();
  // console.log(x);
  let {
    state: { products },
  } = useContext(shop);
  return (
    <div className="container">
      <div style={{marginRight: '1rem', padding: '1rem'}}>
        <Filter />
      </div>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((ele) => (
          <SinglePage products={ele} key={ele.id}></SinglePage>
        ))}
      </div>
    </div>
  );
};

export default Home;

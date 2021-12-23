import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/Actions";

const ShowDetails = (props) => {
  const { productId } = useParams();
  const { products, addToCart } = props;
  return (
    <div>
      thisis details page
      {products
        .filter((x) => x.id == productId)
        .map((pd) => (
          <div key={pd.id}>
              <h1>{pd.title}</h1>
              <p>{pd.price}</p>
              <button onClick={() => addToCart(pd.id, pd.title, pd.price)}>cart</button>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails);

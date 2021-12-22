import React from "react";
import { Button, Card } from "react-bootstrap";
import './SinglePage.css';

const SinglePage = ({ products }) => {
  return (
    <div className="products">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={products.image} />
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>
            ${products.price}
          </Card.Text>
          <Button variant="primary" disabled={!products.inStock}>
              {
                  !products.inStock? 'Out of stock' : 'Add to cart'
              }
          </Button>
          <Button variant="danger">Remove from cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePage;

import React from 'react';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <ul>
                <li>{products.name}</li>
                <button onClick={() => addToCart(products.id, products.name)}>add</button>
            </ul>
        </div>
    );
};

export default Shop;
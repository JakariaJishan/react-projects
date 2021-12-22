import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Action/Action';
import Shop from '../Shop/Shop';

const Products = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            {
                products.map(pd => <Shop products={pd} key={pd.id} addToCart={addToCart}></Shop>)
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}


export default connect(mapStateToProps, mapDispatchToProps) (Products);
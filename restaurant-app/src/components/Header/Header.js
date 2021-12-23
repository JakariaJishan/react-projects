import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {cart} = props;
    return (
        <div>
            <h1>this is header</h1>
            <Link to={'/cart'}>cart item: {cart.length}</Link>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null) (Header);
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/Action/Action';

const Preview = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>

            { cart.length!==0 ?
                cart.map(ele => <p key={ele.cartId}>
                    {ele.productName}
                    <button onClick={() => removeFromCart(ele.cartId)}>x</button>
                </p>): <p>cart is empty</p>
            }
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
      cart: state.cart,
    };
  };
  const mapDispatchToProps = {
    removeFromCart: removeFromCart,
  };
export default connect(mapStateToProps, mapDispatchToProps) (Preview);
const initialState = {
  cart: [],
  products: [
    { name: "jack", id: 1 },
    { name: "joe", id: 2 },
    { name: "william", id: 3 },
  ],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = {
        productName: action.name,
        productId: action.id,
        cartId: state.cart.length + 1,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((pd) => pd.cartId !== action.id),
      };
    default:
      return state;
  }
};

export default shopReducer;

import faker from "faker";
import React, { createContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
export const shop = createContext();
faker.seed(90);
const Context = ({children}) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 7, 9]),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
  })
  return <shop.Provider value={{state, dispatch}}>{children}</shop.Provider>;
};

export default Context;


import { createStore } from "redux";
import shopReducer from "../shopReducer/shopReducer";

export const store = createStore(shopReducer);
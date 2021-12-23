import { createStore } from "redux";
import foodReducers from "../Reducers/Reducers";

export const store = createStore(foodReducers);
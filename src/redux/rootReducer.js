import { combineReducers } from "@reduxjs/toolkit";
import coffeeReducer from "../features/coffee/coffee.js";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export default rootReducer;
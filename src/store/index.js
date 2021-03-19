import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import category from "./category";
import item from "./item";

const reducer = combineReducers({
  login,
  signup,
  category,
  item,
});

const store = configureStore({
  reducer,
});
export default store;

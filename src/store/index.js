import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import category from "./category";
import item from "./item/item";
import popularThisWeek from "./item/popularThisWeek";
import topSales from "./item/topSales";
import tredingNow from "./item/tredingNow";

const reducer = combineReducers({
  login,
  signup,
  category,
  item,
  popularThisWeek,
  topSales,
  tredingNow,
});

const store = configureStore({
  reducer,
});
export default store;

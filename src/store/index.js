import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import category from "./category";
import item from "./item/item";
import popularThisWeek from "./item/popularThisWeek";
import topSales from "./item/topSales";
import tredingNow from "./item/tredingNow";
import relatedItem from "./item/relatedItem";
import customerAlsoViews from "./item/customerAlsoViewed";
import categoryItems from "./item/categoryItems";
import premiumItems from "./item/premiumItem";
import sharedItemByUser from "./item/sharedItemByUser";

const reducer = combineReducers({
  login,
  signup,
  category,
  item,
  popularThisWeek,
  topSales,
  tredingNow,
  relatedItem,
  customerAlsoViews,
  categoryItems,
  premiumItems,
  sharedItemByUser,
});

const store = configureStore({
  reducer,
});
export default store;

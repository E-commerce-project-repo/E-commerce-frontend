import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import category from "./category";
import item from "./item/item";
import latestItem from "./item/latestItem";
import popularThisWeek from "./item/popularThisWeek";
import topSales from "./item/topSales";
import topViewedItems from "./item/topViewedItems";
import relatedItem from "./item/relatedItem";
import customerAlsoViews from "./item/customerAlsoViewed";
import categoryItems from "./item/categoryItems";
import premiumItems from "./item/premiumItem";
import sharedItemByUser from "./item/sharedItemByUser";
import addViewItem from "./item/add_viewed_item";
import searchItems from "./item/search";

import carts from "./carts/carts";
import getCarts from "./getCarts";
import deleteCarts from "./carts/deleteCarts";
import getSingleItem from "./item/getSingleItem";

const reducer = combineReducers({
  login,
  signup,
  category,
  item,
  popularThisWeek,
  topSales,
  topViewedItems,
  relatedItem,
  customerAlsoViews,
  categoryItems,
  premiumItems,
  sharedItemByUser,
  carts,
  getCarts,
  latestItem,
  deleteCarts,
  // addViewItem,
  searchItems,
  getSingleItem,
});

const store = configureStore({
  reducer,
});
export default store;

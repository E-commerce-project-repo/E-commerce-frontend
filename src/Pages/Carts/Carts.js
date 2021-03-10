import React, { useState, useEffect } from "react";
import {
  productData,
  productDataTwo,
} from "../../components/CategoryGrid/data";
import { MyCarts } from "../../components/ShopingCart/Cart";
export const Carts = () => {
  return <MyCarts data={productData} />;
};

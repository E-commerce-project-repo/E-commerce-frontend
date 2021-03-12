import React, { useState, useEffect } from "react";
import {
  productData,
  productDataTwo,
} from "../../components/CategoryGrid/data";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { PopularThisWeek } from "../../components/popularWeeks/CardBuilder";

import { SellerInfo } from "../../components/seller/Seller";
export const Seller = () => {
  return (
    <>
      <SellerInfo />;
      <ItemGrid title="Item shared" data={productData} />
      <PopularThisWeek title="Top 10 Items" data={productData} />
    </>
  );
};

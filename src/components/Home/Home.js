import { useState } from "react";

import { productData, productDataTwo } from "../CategoryGrid/data";
import { CategoryGrid } from "../CategoryGrid/CategoryGrid";
import { Hero } from "../Hero/index";
import Feature from "../Feature/index";
import {
  RightPaginationArrow,
  LeftPaginationArrow,
  ItemContainer,
} from "./Home.element";
import { ItemCard } from "../Card/Card";
import { SideBody } from "../SideBodyBar/SideBody";
import { ItemGrid } from "../ItemGrid/ItemGrid";

export const Home = () => {
  const [page, SetIsActive] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  return (
    <>
      <Hero />
      <CategoryGrid
        heading="Popular Categories"
        data={productData}
        isCategory={true}
      />

      <ItemGrid title="Latest Items" data={productData} />
      <Feature />
    </>
  );
};

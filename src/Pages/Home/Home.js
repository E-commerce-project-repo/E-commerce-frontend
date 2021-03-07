import { useState } from "react";
import {
  productData,
  productDataTwo,
} from "../../components/CategoryGrid/data";
import { Slider } from "../../components/Slider/Slide";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { CategoryGrid } from "../../components/CategoryGrid/CategoryGrid";
import Feature from "../../components/Cards/Feature/index";
import { PopularThisWeek } from "../../components/popularWeeks/CardBuilder";

export const Home = () => {
  const [page, SetIsActive] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  return (
    <>
      <Slider data={productData} />
      <CategoryGrid title="Top sales" data={productData} />
      <ItemGrid title="Top sales" data={productData} />
      <Feature />
      <ItemGrid title="Treding now" data={productData} />
      <PopularThisWeek title="Popular this week" data={productData} />
    </>
  );
};

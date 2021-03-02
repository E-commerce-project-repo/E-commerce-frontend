import { useState } from "react";

import { productData, productDataTwo } from "../CategoryGrid/data";
import { CategoryGrid } from "../CategoryGrid/CategoryGrid";
import { Hero } from "../Hero/index";
import Feature from "../Feature/index";
import {
  RightPaginationArrow,
  LeftPaginationArrow,
  ItemContainer,
  SlidderContainer,
  SlidItemWrapper,
} from "./Home.element";
import { ItemCard } from "../Card/Card";
import { SideBody } from "../SideBodyBar/SideBody";
import { ItemGrid } from "../ItemGrid/ItemGrid";
import { Carousel } from "../Slider/Slide";
import styled from "styled-components";
import { Slider } from "../../components/Slider/Slide";

export const Home = () => {
  const [page, SetIsActive] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  const Page = styled.div`
    width: 100%;
    /* margin-left: auto;
    margin-right: auto; */
    display: flex;
    flex-direction: column;
  `;
  return (
    <>
      {/* <Hero /> */}
      <Slider data={productData} />
      <CategoryGrid
        heading="Popular Categories"
        data={productData}
        isCategory={true}
      />
      {/* <ItemGrid title="Latest Items" data={productData} />
      <ItemGrid title="Latest Items" data={productData} /> */}
      {/* <Page> */}
      {/* <LeftPaginationArrow /> */}

      {/* </Page> */}

      <Feature />
    </>
  );
};

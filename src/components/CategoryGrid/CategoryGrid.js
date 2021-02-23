import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
} from "./CategoryGrid.elements";
import { ItemCard, CategoryCard } from "../Card/Card";

export const CategoryGrid = (props) => {
  var data = props.data;
  data.length = 7;
  return (
    <ProductsContainer>
      <ProductsHeading>{props.heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <CategoryCard product={product} isCategory={true} index={index} />
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

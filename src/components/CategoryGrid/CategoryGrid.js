import React, { useState, useEffect } from "react";

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
} from "./CategoryGrid.elements";
import { ItemCard, CategoryCard } from "../Cards/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../constants/constants";
import { category } from "../../store/category";

export const CategoryGrid = (props) => {
  return (
    <ProductsContainer>
      <ProductsHeading>
        {props.data ? props.title : "No category found"}
      </ProductsHeading>
      <ProductWrapper>
        {props.data?.map((product, index) => {
          return (
            <CategoryCard product={product} isCategory={true} index={index} />
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

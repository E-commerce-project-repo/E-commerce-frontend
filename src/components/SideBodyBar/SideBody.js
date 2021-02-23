import React, { useState, useEffect } from "react";

import {
  CategoryHeading,
  CategoryListItem,
  ItemShowMore,
  PriceInputField,
  SideCategoryHolder,
  PriceContainer,
  PriceLabel,
  PriceProgress,
  InputFieldContainer,
  ToLabel,
  SortLabel,
  SortItems,
  SortItem,
} from "./SideBody.elements";
export const SideBody = () => {
  const [page, SetIsActive] = useState(0);
  const [showAllCategory, setShowAllCategory] = useState(false);
  const [value, onChange] = useState(1);

  return (
    <SideCategoryHolder>
      <CategoryHeading>Categories</CategoryHeading>
      <CategoryListItem>All</CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem>Category and Electronics</CategoryListItem>
      {showAllCategory ? (
        <>
          <CategoryListItem>Apple ProductsContainer</CategoryListItem>
          <CategoryListItem>Cement raw materials</CategoryListItem>
          <CategoryListItem>Car maintaince tools</CategoryListItem>
          <CategoryListItem>clothes and shoes</CategoryListItem>
        </>
      ) : null}

      <ItemShowMore
        onClick={() => {
          setShowAllCategory(!showAllCategory);
        }}
      >
        {showAllCategory ? "Show Less" : "Show more"}
      </ItemShowMore>

      <PriceContainer>
        <PriceLabel> Price</PriceLabel>
        <PriceProgress
          type="range"
          min="1"
          max="100000"
          value={value}
          onChange={({ target: { value: radius } }) => {
            onChange(radius);
          }}
        />
        <InputFieldContainer>
          <PriceInputField value={1} />
          <ToLabel>To</ToLabel>
          <PriceInputField value={value} />
        </InputFieldContainer>
      </PriceContainer>

      <SortLabel> Sort by</SortLabel>
      <SortItems>
        <SortItem>News first</SortItem>
        <SortItem>Price: High to Low</SortItem>
        <SortItem>Price: Low to High</SortItem>
        <SortItem>Last 24hrs</SortItem>
        <SortItem>Top selled items</SortItem>
      </SortItems>
    </SideCategoryHolder>
  );
};

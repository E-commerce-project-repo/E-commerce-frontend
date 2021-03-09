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
export const SideBody = ({ showCategory, setShowCategory }) => {
  const [page, SetIsActive] = useState(0);
  const [showAllCategory, setShowAllCategory] = useState(false);
  const [value, onChange] = useState(1);

  return (
    <SideCategoryHolder showCategory={showCategory}>
      <CategoryHeading>Categories</CategoryHeading>
      <CategoryListItem onClick={() => setShowCategory(!showCategory)}>
        All
      </CategoryListItem>
      <CategoryListItem onClick={() => setShowCategory(!showCategory)}>
        Category Electronics Electronics
      </CategoryListItem>
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
        <SortItem onClick={() => setShowCategory(!showCategory)}>
          News first
        </SortItem>
        <SortItem onClick={() => setShowCategory(!showCategory)}>
          Price: High to Low
        </SortItem>
        <SortItem onClick={() => setShowCategory(!showCategory)}>
          Price: Low to High
        </SortItem>
        <SortItem onClick={() => setShowCategory(!showCategory)}>
          Last 24hrs
        </SortItem>
        <SortItem onClick={() => setShowCategory(!showCategory)}>
          Top selled items
        </SortItem>
      </SortItems>
    </SideCategoryHolder>
  );
};

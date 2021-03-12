import { useState } from "react";

import { Container, CategoryListItem } from "./HidedCategory.element";

export const HidedCategory = (props) => {
  return (
    <Container showCategory={props.showCategory}>
      <CategoryListItem onClick={() => props.categoryLabel("All")}>
        All
      </CategoryListItem>
      <CategoryListItem
        onClick={() => props.categoryLabel("Category  Electronics items")}
      >
        Category Electronics Electronics
      </CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem
        onClick={() => props.categoryLabel("Category and Electronics no")}
      >
        Category and Electronics
      </CategoryListItem>
      <CategoryListItem>Apple ProductsContainer</CategoryListItem>
      <CategoryListItem>Cement raw materials</CategoryListItem>
      <CategoryListItem>Car maintaince tools</CategoryListItem>
      <CategoryListItem>clothes and shoes</CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem>Category and Electronics</CategoryListItem>
      <CategoryListItem>Apple ProductsContainer</CategoryListItem>
      <CategoryListItem>Cement raw materials</CategoryListItem>
      <CategoryListItem>Car maintaince tools</CategoryListItem>
      <CategoryListItem>clothes and shoes</CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem>Category Electronics Electronics</CategoryListItem>
      <CategoryListItem>Category and Electronics</CategoryListItem>
      <CategoryListItem>Apple ProductsContainer</CategoryListItem>
      <CategoryListItem>Cement raw materials</CategoryListItem>
      <CategoryListItem>Car maintaince tools</CategoryListItem>
      <CategoryListItem>clothes and shoes</CategoryListItem>
      <CategoryListItem>clothes and shoes</CategoryListItem>
      <CategoryListItem>clothes and shoes</CategoryListItem>
      <CategoryListItem>clothes and shoes</CategoryListItem>
    </Container>
  );
};

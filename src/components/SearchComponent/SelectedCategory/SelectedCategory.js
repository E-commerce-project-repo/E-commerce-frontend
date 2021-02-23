import React, { useState } from "react";
import {
  Container,
  CategoryListItem,
  Item,
  Title,
} from "./SelectedCategory.elements";

export const CategoryList = (props) => {
  const [categoryList, setCategoryList] = useState(props.list);
  const deleteCategory = (item) => {
    const myArray = categoryList.filter((i) => {
      return i !== item;
    });

    setCategoryList(myArray);
    props.deleteCategory(myArray);
  };
  return (
    <>
      <Container>
        {categoryList.length > 0 ? (
          <Title> Selected Category Lists</Title>
        ) : (
          <Title> No Category selected yet</Title>
        )}

        {categoryList.map((item) => (
          <CategoryListItem
            onDoubleClick={() => deleteCategory(item)}
            onClick={() => deleteCategory(item)}
          >
            <Item>{item.name}</Item>
          </CategoryListItem>
        ))}
      </Container>
    </>
  );
};

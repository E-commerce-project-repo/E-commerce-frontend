import { useState, useEffect } from "react";

import { Container, CategoryListItem } from "./HidedCategory.element";
import { useDispatch, useSelector } from "react-redux";
import * as categoryAction from "../../store/category";

export const HidedCategory = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryAction.category());
  }, []);
  const categoryPayload = useSelector((state) => state.category);

  return (
    <Container showCategory={props.showCategory}>
      {categoryPayload.payload.map((item, index) => {
        return (
          <CategoryListItem onClick={() => props.categoryLabel(item.name)}>
            {item.name}
          </CategoryListItem>
        );
      })}
    </Container>
  );
};

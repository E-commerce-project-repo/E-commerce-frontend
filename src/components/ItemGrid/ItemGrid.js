import { useState } from "react";

import { productData, productDataTwo } from "../CategoryGrid/data";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  Pagination,
  PaginationLink,
  PaginationContainer,
  RightPaginationArrow,
  LeftPaginationArrow,
} from "./ItemGrid.element";
import { ItemCard } from "../Card/Card";

export const ItemGrid = ({ title, data }) => {
  data.length = 5;
  const [page, SetIsActive] = useState(0);
  const Paginator = (props) => {
    return (
      <PaginationLink
        onClick={() => {
          SetIsActive(props.index);
        }}
        isActive={props.index === page ? true : false}
      >
        {props.index + 1}
      </PaginationLink>
    );
  };
  return (
    <ProductsContainer>
      <ProductsHeading>{title}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ItemCard product={product} isCategory={false} index={index} />
          );
        })}
      </ProductWrapper>

      <PaginationContainer>
        <LeftPaginationArrow />
        <Pagination>
          {productData.map((_pro, index) => {
            return <Paginator index={index} />;
          })}
        </Pagination>
        <RightPaginationArrow />
      </PaginationContainer>
    </ProductsContainer>
  );
};

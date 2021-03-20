import { useState } from "react";

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  Pagination,
  PaginationLink,
  PaginationContainer,
  ProductsHeadingContainer,
  RightPaginationArrow,
  LeftPaginationArrow,
  OrderedAmount,
  TotalPrice,
  HeaderTitle,
  ProductHeaderWrapper,
} from "./Orders.element";
import { OrderCard } from "../Cards/OrderCard/Card";

export const Orders = ({ title, data }) => {
  data.length = 5;
  var [page, SetIsActive] = useState(0);
  const next = () => {
    if (page < data.length - 1) {
      SetIsActive(page + 1);
    }
  };
  const prev = () => {
    if (page > 0) {
      SetIsActive(page - 1);
    }
  };

  const Paginator = ({ index }) => {
    return (
      <PaginationLink
        onClick={() => {
          SetIsActive(index);
        }}
        isActive={index === page ? true : false}
      >
        {index + 1}
      </PaginationLink>
    );
  };
  return (
    <ProductsContainer>
      <ProductsHeadingContainer>
        <ProductsHeading>{title}</ProductsHeading>
        <PaginationContainer>
          <LeftPaginationArrow onClick={prev} />
          <RightPaginationArrow onClick={next} />
        </PaginationContainer>
      </ProductsHeadingContainer>
      <ProductHeaderWrapper>
        <HeaderTitle>Product</HeaderTitle>
        <HeaderTitle>Amount</HeaderTitle>
        <HeaderTitle>Total Price</HeaderTitle>
      </ProductHeaderWrapper>
      {data.map((product, _index) => {
        return (
          <ProductWrapper>
            <OrderCard product={product} />
            <OrderedAmount>10</OrderedAmount>
            <TotalPrice>$1000.00</TotalPrice>
          </ProductWrapper>
        );
      })}

      <PaginationContainer>
        <Pagination>
          {data.map((_pro, index) => {
            return <Paginator index={index} />;
          })}
        </Pagination>
      </PaginationContainer>
    </ProductsContainer>
  );
};

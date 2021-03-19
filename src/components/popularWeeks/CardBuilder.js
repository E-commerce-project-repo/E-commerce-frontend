import React from "react";
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
} from "./CardBuilder.elements";
import { SideItemCard } from "../Cards/SideCard/Card";

export const PopularThisWeek = ({ title, data }) => {
  // data.length = 3;
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
    console.log(page, data.length);
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

      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <SideItemCard data={product} isCategory={false} index={index} />
          );
        })}
      </ProductWrapper>

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

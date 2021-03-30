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
  ThreeDots,
} from "./ItemGrid.element";
import { ItemCard } from "../Cards/Card/Card";

export const ItemGrid = ({
  title,
  data,
  nextPage,
  number_in_page,
  count,
  nextUrl,
  previousUrl,
  prevPage,
  page,
  currentPage,
}) => {
  let dotController = false,
    pages = [],
    total_data_length = data.length;
  for (let i = 0; i < count / number_in_page; i++) {
    pages.push(i);
  }
  const next = () => {
    if (nextUrl) {
      nextPage(nextUrl);
    }
  };
  const prev = () => {
    if (prevPage && page > 0) {
      prevPage(previousUrl);
    }
  };

  const Paginator = ({ index }) => {
    return (
      <PaginationLink
        onClick={() => {
          currentPage(index);
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
            <ItemCard product={product} isCategory={false} index={index} />
          );
        })}
      </ProductWrapper>

      <PaginationContainer>
        <Pagination>
          {pages.map((index) => {
            if (
              index === 0 ||
              index === 1 ||
              index === 2 ||
              index === pages.length - 1 ||
              index === total_data_length - 2 ||
              index === total_data_length - 3 ||
              (index > page - 2 && index < page + 3) ||
              pages.length < 10
            ) {
              return <Paginator index={index} />;
            } else if (dotController === false) {
              dotController = true;
              return <ThreeDots />;
            }
          })}
        </Pagination>
      </PaginationContainer>
    </ProductsContainer>
  );
};

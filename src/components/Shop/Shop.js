import { useState } from "react";

import { productData, productDataTwo } from "../CategoryGrid/data";
import Search from "../SearchComponent/Search";
import { SideBody } from "../SideBodyBar/SideBody";

import { ItemContainer, SideCategoryHolder } from "./Shop.element";
import {
  ProductsContainer,
  ProductWrapper,
  Pagination,
  PaginationLink,
  PaginationContainer,
  RightPaginationArrow,
  LeftPaginationArrow,
  ExpandArrow,
} from "./Shop.element";
import { ItemCard } from "../Card/Card";
export const Shop = () => {
  const [page, setPage] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  const Paginator = (props) => {
    return (
      <PaginationLink
        onClick={() => {
          setPage(props.index);
        }}
        isActive={props.index === page ? true : false}
      >
        {props.index + 1}
      </PaginationLink>
    );
  };
  return (
    <ItemContainer showCategory={showCategory}>
      <SideBody />
      <ProductsContainer showCategory={showCategory}>
        <Search />

        <ExpandArrow onClick={() => setShowCategory(true)} />

        <ProductWrapper>
          {productDataTwo.map((product, index) => {
            return <ItemCard product={product} isCategory={false} index />;
          })}
        </ProductWrapper>
        <PaginationContainer>
          <LeftPaginationArrow onClick={() => setPage(page - 1)} />
          <Pagination>
            {productData.map((_pro, index) => {
              return <Paginator index={index} />;
            })}
          </Pagination>
          <RightPaginationArrow onClick={() => setPage(page + 1)} />
        </PaginationContainer>
      </ProductsContainer>
    </ItemContainer>
  );
};

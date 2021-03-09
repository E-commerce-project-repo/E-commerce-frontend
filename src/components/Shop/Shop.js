import { useState } from "react";

import { productData, productDataTwo } from "../CategoryGrid/data";
import Search from "../SearchComponent/Search";
import { SideBody } from "../SideBodyBar/SideBody";

import {
  ItemContainer,
  SideCategoryHolder,
  SideBodyCategory,
} from "./Shop.element";
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
import { ItemCard } from "../Cards/Card/Card";
export const Shop = () => {
  const [page, setPage] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  const next = () => {
    if (page < productData.length - 1) {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
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
    <ItemContainer>
      <SideBody showCategory={showCategory} setShowCategory={setShowCategory} />
      <ProductsContainer>
        <ExpandArrow
          onClick={() => {
            setShowCategory(!showCategory);
          }}
        />

        <ProductWrapper>
          {productDataTwo.map((product, _index) => {
            return <ItemCard product={product} isCategory={false} index />;
          })}
        </ProductWrapper>
        <PaginationContainer>
          <LeftPaginationArrow onClick={prev} />
          <Pagination>
            {productData.map((_pro, index) => {
              return <Paginator index={index} />;
            })}
          </Pagination>
          <RightPaginationArrow onClick={next} />
        </PaginationContainer>
      </ProductsContainer>
    </ItemContainer>
  );
};

import React from "react";

import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductInfo,
  AddCartIcon,
} from "./Card.lements";
import { config } from "../../../constants/constants";
export const SideItemCard = ({ data, isCategory }) => {
  return (
    <ProductCard to={config.singlePage}>
      <ProductInfo>
        <ProductTitle>{data.name}</ProductTitle>
        <ProductDesc>{data.desc}</ProductDesc>
        <ProductPrice isCategory={false}>{data.price}</ProductPrice>
        <ProductButton isCategory={isCategory} to="/carts">
          <AddCartIcon /> {data.button}
        </ProductButton>
      </ProductInfo>
      <ProductImg src={data.img} alt={data.alt} />
    </ProductCard>
  );
};

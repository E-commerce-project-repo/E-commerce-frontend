import React from "react";

import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductInfo,
} from "./Card.lements";
import { config } from "../../../constants/constants";
export const SideItemCard = ({ data }) => {
  return (
    <ProductCard to={config.singlePage}>
      <ProductInfo>
        <ProductTitle>{data.name}</ProductTitle>
        <ProductDesc>{data.desc}</ProductDesc>
        <ProductPrice isCategory={false}>{data.price}</ProductPrice>
        <ProductButton isCategory={false}>{data.button}</ProductButton>
      </ProductInfo>
      <ProductImg src={data.img} alt={data.alt} />
    </ProductCard>
  );
};

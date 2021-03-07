import React from "react";

import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductInfo,
} from "./Card.lements";

export const OrderCard = ({ product }) => {
  return (
    <ProductCard>
      <ProductImg src={product.img} alt={product.alt} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
    </ProductCard>
  );
};

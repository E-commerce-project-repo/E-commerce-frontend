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
  HeightGap,
  WidthGap,
  CheckedIcon,
} from "./Card.lements";
import sweet3 from "../../../images/mac1.jpg";
import { parseDate } from "../../../utilities/dateFormat";
import { config } from "../../../constants/constants";
export const SideItemCard = ({ data, isCategory }) => {
  return (
    <ProductCard to={config.singlePage}>
      <ProductInfo>
        <ProductTitle>{data.title}</ProductTitle>
        <HeightGap height="5px" />
        <ProductDesc>{data.description}</ProductDesc>
        <HeightGap height="10px" />

        <ProductDesc>
          <CheckedIcon />${data.price}
        </ProductDesc>

        <HeightGap height="5px" />

        <ProductDesc>
          <CheckedIcon />
          {data.items_in_stock + " in stock"}
        </ProductDesc>
        <ProductDesc>
          <CheckedIcon />
          {data.location}
        </ProductDesc>
        <ProductDesc>
          <CheckedIcon />
          {data.shop.name}
        </ProductDesc>
        <ProductButton isCategory={isCategory} to="/carts">
          <AddCartIcon />
        </ProductButton>
        <ProductDesc>{parseDate(data.created_at)}</ProductDesc>
      </ProductInfo>
      <ProductImg src={sweet3} alt={data.alt} />
    </ProductCard>
  );
};

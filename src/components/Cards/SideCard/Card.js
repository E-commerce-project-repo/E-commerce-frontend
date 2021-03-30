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
import { Link } from "react-router-dom";

import sweet3 from "../../../images/mac1.jpg";
import { parseDate } from "../../../utilities/dateFormat";
import { config } from "../../../constants/constants";
export const SideItemCard = ({ data, isCategory, height }) => {
  return (
    <ProductCard to={config.singlePage} height={height}>
      <ProductInfo>
        <ProductTitle>{data.name}</ProductTitle>

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
          {data.condition}
        </ProductDesc>
        <ProductDesc>
          <CheckedIcon />
          Owner by{" "}
          <Link
            to={{
              pathname: config.sellerInfo,
              data: data,
            }}
          >
            {data.name}
          </Link>
        </ProductDesc>

        <ProductButton isCategory={isCategory} to="/carts">
          <AddCartIcon />
        </ProductButton>
        <ProductDesc>{parseDate(data.created_at)}</ProductDesc>
      </ProductInfo>
      <ProductImg src={sweet3} alt={data.alt} height={height} />
    </ProductCard>
  );
};

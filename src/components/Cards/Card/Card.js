import React, { useState } from "react";

import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProfileInfo,
  ProfileImg,
  ProfileName,
  ProfileDesc,
  StarContainer,
  Star,
  ProductInfo,
  ProductButtonWrapper,
  AddCartIcon,
  BottonWrapper,
  LeftItemWrapper,
} from "./Card.lements";
import {
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  Card,
} from "./Category.elements";
import sweet3 from "../../../images/mac1.jpg";
import person from "../../../images/person.jpeg";
import { Notification } from "../../Toast/Toast";
import { config } from "../../../constants/constants";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as cartAction from "../../../store/carts/carts";
import { Link } from "react-router-dom";
import { addViewItem } from "../../../helper/add_viewed_item";

export const ItemCard = ({ product, isCategory, index }) => {
  const dispatch = useDispatch();
  const cartPayload = useSelector((state) => state.carts);
  const addToCart = () => {
    dispatch(cartAction.add(product));
  };
  return (
    <ProductCard
      to={{
        pathname: config.singlePage,
        data: product,
      }}
      onClick={() => dispatch(addViewItem(product))}
    >
      <ProductInfo>
        <ProductImg src={sweet3} alt={product.alt} />

        <BottonWrapper>
          <LeftItemWrapper>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice isCategory={isCategory}>
              ${product.price}
            </ProductPrice>
            <ProductDesc>{product.items_in_stock} in Stock</ProductDesc>
            <ProductDesc>
              Owner by{" "}
              <Link
                to={{
                  pathname: config.sellerInfo,
                  data: product,
                }}
              >
                {product.owner.name}
              </Link>
            </ProductDesc>
          </LeftItemWrapper>
          <ProductButton>
            <AddCartIcon onClick={addToCart} />
          </ProductButton>
        </BottonWrapper>
      </ProductInfo>

      <ProductButtonWrapper isCategory={isCategory}></ProductButtonWrapper>
    </ProductCard>
  );
};

export const CategoryCard = ({ product, isCategory, index }) => {
  return (
    <Card
      key={index}
      to={{
        pathname: config.shoping,
        data: product,
      }}
    >
      <CategoryInfo>
        <CategoryImg src={sweet3} alt={product.alt} />
        <CategoryTitle>{product.name}</CategoryTitle>
      </CategoryInfo>
    </Card>
  );
};

export const PersonProfileInfo = ({ data }) => {
  return (
    <ProfileInfo
      to={{
        pathname: config.sellerInfo,
        data: data,
      }}
    >
      <ProfileImg src={person} />
      <ProfileName>{data.name}</ProfileName>
      <ProfileDesc>Lives, Addis Ababa, Ethiopia</ProfileDesc>
      <ProfileDesc>{data.email}</ProfileDesc>
      <ProfileDesc>Joined, Aug 6,2027</ProfileDesc>
      <StarContainer>
        <Star active={true} />
        <Star active={true} />
        <Star active={true} />
        <Star />
        <Star />
      </StarContainer>
    </ProfileInfo>
  );
};

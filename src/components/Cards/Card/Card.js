import React from "react";

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
} from "./Card.lements";
import {
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  Card,
} from "./Category.elements";

import { config } from "../../../constants/constants";
export const ItemCard = ({ product, isCategory, index }) => {
  return (
    <ProductCard key={index} to={config.singlePage}>
      <ProductInfo>
        <ProductImg src={product.img} alt={product.alt} />
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDesc>{product.desc}</ProductDesc>
        <ProductPrice isCategory={isCategory}>{product.price}</ProductPrice>
        <ProductButton to="/carts">
          <AddCartIcon />
          {product.button}
        </ProductButton>
      </ProductInfo>

      <ProductButtonWrapper isCategory={isCategory}></ProductButtonWrapper>
    </ProductCard>
  );
};

export const CategoryCard = ({ product, isCategory, index }) => {
  return (
    <Card key={index}>
      <CategoryInfo>
        <CategoryImg src={product.img} alt={product.alt} />
        <CategoryTitle>{product.name}</CategoryTitle>
      </CategoryInfo>
    </Card>
  );
};

export const PersonProfileInfo = ({ person }) => {
  return (
    <ProfileInfo to={config.sellerInfo}>
      <ProfileImg src={person} />
      <ProfileName>Endalk belete</ProfileName>
      <ProfileDesc>Lives, Addis Ababa, Ethiopia</ProfileDesc>
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

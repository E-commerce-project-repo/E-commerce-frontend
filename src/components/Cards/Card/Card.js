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

import { config } from "../../../constants/constants";
export const ItemCard = ({ product, isCategory, index }) => {
  return (
    <ProductCard
      to={{
        pathname: config.singlePage,
        data: product,
      }}
    >
      <ProductInfo>
        <ProductImg src={sweet3} alt={product.alt} />

        <BottonWrapper>
          <LeftItemWrapper>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice isCategory={isCategory}>
              ${product.price}
            </ProductPrice>
            <ProductDesc>{product.items_in_stock} in Stock</ProductDesc>
          </LeftItemWrapper>
          <ProductButton to="/carts">
            <AddCartIcon />
          </ProductButton>
        </BottonWrapper>
      </ProductInfo>

      <ProductButtonWrapper isCategory={isCategory}></ProductButtonWrapper>
    </ProductCard>
  );
};

export const CategoryCard = ({ product, isCategory, index }) => {
  return (
    <Card key={index}>
      <CategoryInfo>
        <CategoryImg src={sweet3} alt={product.alt} />
        <CategoryTitle>{product.name}</CategoryTitle>
      </CategoryInfo>
    </Card>
  );
};

export const PersonProfileInfo = ({ data }) => {
  console.log(data);
  return (
    <ProfileInfo to={config.sellerInfo}>
      <ProfileImg src={person} />
      <ProfileName>Endalk belete</ProfileName>
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

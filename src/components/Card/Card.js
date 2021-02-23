import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
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
  ProfileButton,
  ProductInfo,
} from "./Card.lements";
import { CategoryImg, CategoryInfo, Card } from "./Category.elements";

export const ItemCard = ({ product, isCategory, index }) => {
  return (
    <ProductCard key={index}>
      <ProductInfo>
        <ProductImg src={product.img} alt={product.alt} />
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDesc>{product.desc}</ProductDesc>
        <ProductPrice isCategory={isCategory}>{product.price}</ProductPrice>
        <ProductButton isCategory={isCategory}>{product.button}</ProductButton>
      </ProductInfo>
    </ProductCard>
  );
};

export const CategoryCard = ({ product, isCategory, index }) => {
  return (
    <Card key={index}>
      <CategoryInfo>
        <CategoryImg src={product.img} alt={product.alt} />
        <ProductTitle>{product.name}</ProductTitle>
      </CategoryInfo>
    </Card>
  );
};

export const PersonProfileInfo = ({ person }) => {
  return (
    <ProfileInfo>
      <ProfileImg src={person} />
      <ProfileName>Endalk belete</ProfileName>
      <ProfileDesc>Lives, Addis Ababa, Ethiopia</ProfileDesc>
      <ProfileDesc>Joined, Aug 6,2027</ProfileDesc>
      <ProfileButton isCategory={false}>View Detail</ProfileButton>
    </ProfileInfo>
  );
};

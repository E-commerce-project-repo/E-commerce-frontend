import React from "react";
import {
  FeatureContainer,
  FeatureButton,
  ProfileLink,
  Price,
} from "./AddsCard.elements";
import { config } from "../../../constants/constants";

export const AddWithImage = ({ data }) => {
  return (
    <FeatureContainer>
      <h1>{data.title}</h1>
      <ProfileLink
        to={{
          pathname: config.sellerInfo,
          data: data,
        }}
      >
        {data.owner.name}
      </ProfileLink>
      <Price>Only {data.items_in_stock} in stock</Price>
      <Price>$100</Price>
      <FeatureButton
        to={{
          pathname: config.singlePage,
          data: data,
        }}
      >
        View Item
      </FeatureButton>
    </FeatureContainer>
  );
};

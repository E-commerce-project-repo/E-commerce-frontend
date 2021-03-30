import React from "react";
import * as Elements from "./AddsCard.elements";
import { config } from "../../../constants/constants";

export const AddWithImage = ({ data }) => {
  return (
    <Elements.FeatureContainer
      to={{
        pathname: config.singlePage,
        data: data,
      }}
    >
      <Elements.OverviewContainer>
        <Elements.Title>{data?.name}</Elements.Title>
        <Elements.Overview>{data?.description}</Elements.Overview>
        <Elements.FeatureButton
          to={{
            pathname: config.singlePage,
            data: data,
          }}
        >
          View Item
        </Elements.FeatureButton>
      </Elements.OverviewContainer>
    </Elements.FeatureContainer>
  );
};

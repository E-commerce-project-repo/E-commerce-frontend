import React, { useState, useEffect } from "react";

import {
  Container,
  ImageContainer,
  ProfileImg,
  LabelDetail,
  VerticalGap,
  PersonInfoWrapper,
} from "./Seller.elements";
import { Label } from "../../globalStyles";
import product1 from "../../images/person.jpeg";

export const SellerInfo = () => {
  return (
    <Container>
      <ImageContainer>
        <ProfileImg src={product1} />
        <Label style={{ textAlign: "center" }}>Endalk belete</Label>
      </ImageContainer>
      <VerticalGap />

      <PersonInfoWrapper>
        <Label>Bole Edina shop</Label>
        <LabelDetail>Kasanchis Addis ababa Ethiopia</LabelDetail>
        <LabelDetail>Hello Taxi</LabelDetail>
        <VerticalGap />
        <LabelDetail>
          A programming language is a formal language comprising a set of
          instructions that produce various kinds of output. Programming
          languages are used in computer programming to implement algorithms.
          Most programming languages consist of instructions for computers.
        </LabelDetail>
      </PersonInfoWrapper>
    </Container>
  );
};

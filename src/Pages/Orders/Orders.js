import React, { useState, useEffect } from "react";
import { Container } from "./Orders.elements";
import {
  productData,
  productDataTwo,
} from "../../components/CategoryGrid/data";
import { Orders } from "../../components/Orders/Orders";
export const OrderPage = () => {
  return (
    <Container>
      <Orders title="My Orders" data={productData} />
    </Container>
  );
};

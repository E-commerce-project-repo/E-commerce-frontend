import { useState } from "react";
import {
  Container,
  Title,
  CartListWrapper,
  CartWrapper,
  CartQuntity,
  CartQuntityContainer,
  CartTotalPrice,
  TotalPriceCheckout,
  TotalPrice,
  CheckoutButton,
  CheckoutContainer,
  CloseIcon,
  DetailContainer,
} from "./Cart.elements";
import { SideItemCard } from "../../components/Cards/SideCard/Card";

export const MyCarts = ({ data }) => {
  data.lenth = 5;
  const [count, setCount] = useState(1);
  return (
    <Container>
      <Title>Shoping Cart</Title>
      <CartListWrapper>
        {data.map((item) => {
          return (
            <CartWrapper>
              <SideItemCard data={item} isCategory={true} />
              <CartQuntityContainer>
                <CartQuntity
                  is_button={true}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </CartQuntity>
                <CartQuntity>{count}</CartQuntity>
                <CartQuntity
                  is_button={true}
                  onClick={() => setCount(count + 1)}
                >
                  +
                </CartQuntity>
              </CartQuntityContainer>
              <CartTotalPrice>${10.12 * count}</CartTotalPrice>
              <CloseIcon />
            </CartWrapper>
          );
        })}
      </CartListWrapper>
      <TotalPriceCheckout>
        Shipping & taxes calculated at checkout
        <TotalPrice>Subtotal $75,305.00</TotalPrice>
        <CheckoutContainer>
          <CheckoutButton>Checkout</CheckoutButton>
        </CheckoutContainer>
      </TotalPriceCheckout>
    </Container>
  );
};

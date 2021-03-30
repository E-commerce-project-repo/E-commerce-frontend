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

export const MyCarts = ({ data, removeCart }) => {
  const [count, setCount] = useState(1);
  const CardBuilder = ({ order_item }) => {
    return order_item?.map((item) => (
      <CartWrapper>
        <SideItemCard data={item.item} isCategory={true} height={"150px"} />
        <CartQuntityContainer>
          <CartQuntity is_button={true} onClick={() => setCount(count - 1)}>
            -
          </CartQuntity>
          <CartQuntity>{count}</CartQuntity>
          <CartQuntity is_button={true} onClick={() => setCount(count + 1)}>
            +
          </CartQuntity>
        </CartQuntityContainer>
        <CartTotalPrice>${10.12 * count}</CartTotalPrice>
        <CloseIcon onClick={() => removeCart(item.id)} />
      </CartWrapper>
    ));
  };

  return (
    <Container>
      <Title>My Carts</Title>
      {data?.map((item) => {
        return (
          <CartListWrapper>
            <CardBuilder order_item={item.order_item} />;
            <TotalPriceCheckout>
              Shipping & taxes calculated at checkout
              <TotalPrice>Subtotal {item.total}</TotalPrice>
              <CheckoutContainer>
                <CheckoutButton>Checkout</CheckoutButton>
              </CheckoutContainer>
            </TotalPriceCheckout>
          </CartListWrapper>
        );
      })}
    </Container>
  );
};

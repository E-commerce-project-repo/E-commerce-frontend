import styled from "styled-components";
import {
  colors,
  max_960_responsive_screen_size,
  max_responsive_screen_size,
} from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
  text-align: left;
  margin-left: 2rem;
`;
export const CartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  background-color: ${colors.bodyColor};

  @media screen and (max-width: ${max_responsive_screen_size}) {
    flex-direction: column;
  }
`;
export const CartQuntityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CartQuntity = styled.div`
  width: 3rem;
  height: 2rem;
  border: 1px solid ${colors.bodyColor};
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  :hover {
    cursor: ${({ is_button }) => (is_button ? "pointer" : "")};
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

export const CartTotalPrice = styled.p`
  color: ${colors.primary};
  display: flex;
  font-size: 1rem;
`;

export const TotalPriceCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  padding: 1rem;
`;

export const TotalPrice = styled.div`
  color: ${colors.primary};
  display: flex;
  font-size: 1.4rem;
  justify-content: flex-end;
`;
export const CheckoutContainer = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled(FaIcons.FaTimes)`
  left: 5px;
  top: 15px;
  color: ${colors.primary};
  font-size: 1.5rem;
  :hover {
    color: ${colors.secondary};
    cursor: pointer;
    transition: 0.2s ease-out;
    transform: scale(1.06);
  }
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    top: 20px;
  }
`;
export const CheckoutButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 0.9rem;
  border: none;
  background: ${colors.secondary};
  color: #fff;
  transition: 0.2 ease-out;
  margin-top: 15px;
  display: flex;
  align-items: right;

  justify-content: flex-end;

  &:hover {
    background: ${colors.bodyColor};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const DetailContainer = styled.div``;

import styled from "styled-components";
import { colors } from "../../../constants/constants";

export const ProductCard = styled.div`
  margin: 0 1rem;
  width: 150px;
  height: 150px;

  background-color: ${colors.white};
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 2px 2px ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImg = styled.img`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px ${colors.secondary};
  margin: 1rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 17px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
`;

export const ProfileName = styled.p`
  margin-bottom: 1px;
  font-size: 15px;
  font-weight: 570;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
  margin-top: 5px;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
`;

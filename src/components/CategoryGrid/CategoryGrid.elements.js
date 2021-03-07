import styled from "styled-components";
import { colors } from "../../constants/constants";

export const ProductsContainer = styled.div`
  background: ${colors.bodyColor};
  color: ${colors.dark};
  padding: 2rem 1rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: scroll;
`;

export const ProductsHeading = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-left: 2rem;
`;

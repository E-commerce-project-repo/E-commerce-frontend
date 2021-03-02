import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ProductsContainer = styled.div`
  background: ${colors.bodyColor};
  color: ${colors.dark};
  padding: 2rem 1rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  overflow: scroll;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: left;
  margin-left: 2rem;
`;

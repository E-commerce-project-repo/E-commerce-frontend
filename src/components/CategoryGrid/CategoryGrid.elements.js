import styled from "styled-components";
import { colors } from "../../constants/constants";

export const ProductsContainer = styled.div`
  background: ${colors.bodyColor};
  color: ${colors.dark};
  animation: fade 1.2s linear;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  overflow: scroll;
  padding-left: 1rem;
  padding-right: 1rem;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ProductsHeading = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-left: 2rem;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constants/constants";
export const SideCategoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  top: 0;
  padding: 15px;
  padding: 0.2rem 1rem;

  @media screen and (max-width: 960px) {
    width: 100vh;
    display: ${({ showCategory }) => (showCategory ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ showCategory }) => (showCategory ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: ${colors.bodyColor};
  }
`;
export const CategoryItemWrapper = styled.div`
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
export const CategoryHeading = styled.h2`
  font-size: clamp(1rem, 1.5vw, 2rem);
  font-weight: 570;
`;
export const CategoryListItem = styled.a`
  font-size: 13px;
  padding: 5px;
  :hover {
    cursor: pointer;
    animation: skew 2s infinite;
    animation-direction: alternate;
  }
  @keyframes skew {
    0% {
      transform: skewX(20deg);
    }
    100% {
      transform: skewX(-30deg);
    }
  }
`;
export const ItemShowMore = styled.a`
  font-size: 17px;
  padding: 2px;
  color: ${colors.primary};
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  justify-content: center;
  border-top: 0.4px solid ${colors.primary};
`;
export const PriceLabel = styled.p`
  font-size: 20px;
  margin-top: 1rem;
  font-weight: 570;
`;

export const PriceProgress = styled.input`
  font-size: 20px;
  width: 100%;
  margin-top: 1rem;
`;

export const InputFieldContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

export const PriceInputField = styled.input`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  max-width: 5rem;
  border-radius: 5px;
  padding-left: 5px;
`;
export const ToLabel = styled.span`
  font-size: 20px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const SortLabel = styled.p`
  font-size: 20px;
  margin-top: 1rem;
  font-weight: 570;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 0.4px solid ${colors.primary};
`;

export const SortItems = styled.span`
  display: flex;
  flex-wrap: wrap;
`;
export const SortItem = styled.p`
  background: ${colors.bodyColor};
  padding: 0.2rem 0.7rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid ${colors.primary};
  font-size: 12px;

  :hover {
    cursor: pointer;
    border: 1px solid ${colors.primary};
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

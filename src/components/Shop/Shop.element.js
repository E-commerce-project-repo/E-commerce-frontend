import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  font-size: 1.2rem;
  z-index: 999;
  background: ${colors.white};

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 9fr;
    display: ${(props) => (props.showCategory ? "grid" : "flex")};
    align-items: center;
    background: ${colors.bodyColor};
  }
`;

export const ExpandArrow = styled(FaIcons.FaAngleRight)`
  display: none;
  align-items: center;
  background: ${colors.gray};
  @media screen and (max-width: 760px) {
    display: inline-block;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem calc((100vw - 1300px) / 2);
  background: ${colors.bodyColor};
  color: ${colors.dark};
  @media screen and (max-width: 760px) {
    display: ${({ showCategory }) => (showCategory ? "none" : "")};
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
export const Pagination = styled.div`
  display: inline-block;
  align-items: center;
`;
export const PaginationLink = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  margin: 4px 4px;
  text-decoration: none;
  background-color: ${(props) => (props.isActive ? colors.primary : "")};
  color: ${(props) => (props.isActive ? "white" : "")};
  border-radius: 20px;
  cursor: pointer;
  @media screen and (max-width: 560px) {
    padding: 3px 3px;
    margin: 2px 2px;
    font-size: 12px;
  }
`;
export const LeftPaginationArrow = styled(FaIcons.FaAngleLeft)`
  display: inline-block;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;
export const RightPaginationArrow = styled(FaIcons.FaAngleRight)`
  display: inline-block;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

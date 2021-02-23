import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ProductsContainer = styled.div`
  background: ${colors.bodyColor};
  justify-content: left;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 1rem;
  /* line-height: 2; */
  width: 220px;
  background-color: ${colors.white};
  /* border: 1px solid ${colors.primary}; */
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 2px 2px ${colors.white};

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

export const ProductImg = styled.img`
  height: 100px;
  width: 150px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px ${colors.secondary};
  margin-bottom: 10px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: left;
  padding: 0.2rem 3rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
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
export const LeftPaginationArrow = styled(FaIcons.FaAngleDoubleLeft)`
  display: inline-block;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;
export const RightPaginationArrow = styled(FaIcons.FaAngleDoubleRight)`
  display: inline-block;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

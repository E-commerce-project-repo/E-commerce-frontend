import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ProductsContainer = styled.div`
  background: ${colors.bodyColor};
  justify-content: left;
  padding-bottom: 2rem;
  width: 100%;
  height: auto;
  float: left;
  animation: fade 1.2s linear;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 560px) {
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
  width: 220px;
  background-color: ${colors.white};
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
export const ProductsHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 3rem;
`;
export const ProductsHeading = styled.h1`
  font-size: 1.5rem;

  text-align: left;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;
export const Pagination = styled.div`
  display: flex;
  align-items: center;
`;
export const PaginationLink = styled.a`
  color: black;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${(props) => (props.isActive ? colors.primary : "")};
  color: ${(props) => (props.isActive ? "white" : "")};
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  width: 30px;
  text-align: center;
  justify-content: center;
`;
export const LeftPaginationArrow = styled(FaIcons.FaAngleLeft)`
  display: inline-block;
  align-items: center;
  margin-right: 0.5rem;
  background: ${colors.gray};
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
  background: ${colors.gray};

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

export const ThreeDots = styled(FaIcons.FaEllipsisH)`
  color: ${colors.primary};
  font-size: 2rem;
  color: black;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${(props) => (props.isActive ? colors.primary : "")};
  color: ${(props) => (props.isActive ? "white" : "")};
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  width: 30px;
  text-align: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

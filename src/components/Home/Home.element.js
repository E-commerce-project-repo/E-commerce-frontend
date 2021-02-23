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

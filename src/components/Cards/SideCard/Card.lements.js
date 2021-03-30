import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ProductCard = styled(Link)`
  width: 40%;
  height: ${(height) => (height ? height : " 250px")};
  margin: 6px;
  background-color: ${colors.white};
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${colors.primary};
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

export const ProductImg = styled.img`
  height: 100%;
  width: ${(height) => (height ? "40%" : "auto")};
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px ${colors.secondary};
`;

export const ProductTitle = styled.h4`
  font-size: 17px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  height: 100%;
  width: 50%;
  padding: 0.5rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
`;

export const HeightGap = styled.div`
  height: ${({ height }) => height};
`;
export const WidthGap = styled.div`
  width: ${({ width }) => width};
`;

export const ProductPrice = styled.h6`
  font-size: 1rem;
  display: ${(props) => (props.isCategory ? "none" : "")};
`;

export const ProductButton = styled(Link)`
  font-size: 1rem;
  border: none;
  color: ${colors.white};
  transition: 0.2 ease-out;
  display: ${(props) => (props.isCategory ? "none" : "")};
  text-decoration: none;
  display: flex;
  width: auto;
  height: auto;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${colors.gray};
  padding: 0.4rem;

  &:hover {
    background: ${colors.bodyColor};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  background: ${colors.white};
  padding: 10px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    border: 0.5px solid ${colors.primary};
  }
`;

export const ProfileName = styled.p`
  margin-bottom: 1px;
  font-size: 15px;
  font-weight: 570;
`;

export const ProfileDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
  margin-top: 5px;
`;

export const ProfileImg = styled.img`
  margin-bottom: 1px;
  font-size: 12px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-top: 5px;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: 0.2s ease-out;
  }
`;

export const ProfileButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  border: none;
  background: ${colors.secondary};
  color: #fff;
  transition: 0.2 ease-out;
  margin-top: 15px;

  &:hover {
    background: ${colors.bodyColor};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const AddCartIcon = styled(FaIcons.FaCartPlus)`
  color: ${colors.secondary};
  :hover {
    color: ${colors.secondary};
    cursor: pointer;
  }
`;

export const CheckedIcon = styled(FaIcons.FaChevronCircleRight)`
  color: ${colors.success};
  margin-right: 3px;
  align-items: center;
  font-size: 12px;
`;

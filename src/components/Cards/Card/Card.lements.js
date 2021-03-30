import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ProductCard = styled(Link)`
  margin: 0 1rem;
  width: 210px;
  background-color: ${colors.white};
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px ${colors.white};
  text-decoration: none;
  color: ${colors.primary};
  border: 1px solid ${colors.gray};
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background: ${colors.primary};
    color: ${colors.white};
  }
  @media screen and (max-width: 960px) {
  }
`;

export const BottonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.5rem 0.5rem;
`;
export const LeftItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px ${colors.secondary};
  margin-bottom: 10px;
`;

export const ProductTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  text-align: left;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
  text-align: left;
`;

export const ProductPrice = styled.p`
  text-align: left;
  font-size: 1rem;
  display: ${(props) => (props.isCategory ? "none" : "")};
`;
export const ProductButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: ${({ isCategory }) => (isCategory ? "none" : "")};
`;
export const ProductButton = styled(Link)`
  padding: 0.5rem 0.5rem;
  border: none;
  color: #fff;
  transition: 0.2 ease-out;
  display: ${(props) => (props.isCategory ? "none" : "")};
  text-decoration: none;
  align-self: flex-end;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid ${colors.gray};

  &:hover {
    background: ${colors.bodyColor};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const AddCartIcon = styled(FaIcons.FaCartPlus)`
  color: ${colors.secondary};
`;

export const ProfileInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  background: ${colors.white};
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: ${colors.primary};
  border: 1px solid ${colors.gray};

  :hover {
    cursor: pointer;
    background: ${colors.primary};
    color: ${colors.white};
    transition: 0.2s ease-out;
    transform: scale(1.03);
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: 0.2s ease-out;
  }
`;
export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
`;
export const Star = styled(FaIcons.FaStar)`
  font-size: 1rem;

  color: ${({ active }) => (active ? colors.secondary : colors.gray)};
  transition: 0.2 ease-out;

  &:hover {
    background: ${colors.bodyColor};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

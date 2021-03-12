import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ProductCard = styled(Link)`
  margin: 0 1rem;
  max-width: 400px;
  background-color: ${colors.white};
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 2px 2px ${colors.white};
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${colors.primary};

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

export const ProductImg = styled.img`
  height: 130px;
  width: 160px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px ${colors.secondary};
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 17px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  display: ${(props) => (props.isCategory ? "none" : "")};
`;

export const ProductButton = styled(Link)`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  border: none;
  background: ${colors.secondary};
  color: #fff;
  transition: 0.2 ease-out;
  display: ${(props) => (props.isCategory ? "none" : "")};
  text-decoration: none;
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
  margin-right: 0.2rem;
  :hover {
    color: ${colors.secondary};
    cursor: pointer;
  }
`;

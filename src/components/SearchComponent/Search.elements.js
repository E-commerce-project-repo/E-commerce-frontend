import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import {
  colors,
  max_960_responsive_screen_size,
} from "../../constants/constants";
import { Link } from "react-router-dom";

export const SearchBoxContainer = styled.div`
  width: 100%;
  text-align: right;
  position: relative;

  animation: fadeinout 0.6s linear 1 forwards;
  @keyframes fadeinout {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;
export const SearchBox = styled.input`
  border: 1px solid ${colors.SecondPrimary};
  border-radius: 15px;
  font-size: 1rem;
  padding: 15px;
  transition: width 0.3s;
  color: ${colors.SecondPrimary};
  width: 100%;

  ::placeholder {
    font-style: italic;
    font-size: 20px;
    padding-left: 26%;

    @media screen and (max-width: ${max_960_responsive_screen_size}) {
      font-size: 15px;
    }
  }
  :focus {
    outline: none;
    border: 1px solid ${colors.SecondPrimary};
    padding-left: 26%;
  }
  :hover {
    outline: none;
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    padding: 10px;
    padding-left: 4rem;
  }
`;
export const SearchIconLink = styled(Link)``;

export const SearchIcon = styled(FaIcons.FaSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 3rem;
  top: 17px;
  color: ${colors.primary};
  margin-left: 20px;
  :hover {
    color: ${colors.secondary};
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    width: 15px;
    height: 15px;
  }
`;
export const SearchDevider = styled(FaIcons.FaGripLinesVertical)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 30%;
  top: 15px;
  color: ${colors.primary};
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    width: 20px;
    height: 20px;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  left: 5px;
  top: 17px;
  position: absolute;
  text-align: center;
  font-weight: 670;
  border-right: 2px solid ${colors.primary};
  border-radius: 5px;
  width: 25%;
  padding: 2px;

  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    left: 5px;
    top: 12px;
  }
`;

export const CategoryLabel = styled.span`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  font-style: italic;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 80%;
  text-align: center;
  justify-content: center;
  white-space: nowrap;

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    font-size: 0.7rem;
  }
`;

export const CategoryIcon = styled(FaIcons.FaAngleDown)`
  width: 20px;
  height: 100%;
  color: ${colors.primary};
`;

export const CloseIcon = styled(FaIcons.FaTimes)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 15px;
  color: ${colors.primary};
  margin-left: 20px;

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    top: 20px;
  }
`;

export const Label = styled.label`
  color: ${colors.dark};
  display: block;
`;

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import {
  colors,
  max_960_responsive_screen_size,
} from "../../constants/constants";

export const SearchBoxContainer = styled.div`
  width: 100%;
  text-align: right;
  position: relative;
`;
export const SearchBox = styled.input`
  border: 1px solid ${colors.SecondPrimary};
  border-radius: 15px;
  font-size: 1rem;
  padding: 15px;
  padding-left: 4rem;
  transition: width 0.3s;
  color: ${colors.SecondPrimary};
  width: 100%;
  ::placeholder {
    font-style: italic;
    font-size: 20px;
    @media screen and (max-width: ${max_960_responsive_screen_size}) {
      font-size: 15px;
    }
  }
  :focus {
    outline: none;
    border: 1px solid ${colors.SecondPrimary};
    padding-left: 5rem;
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
export const SearchIcon = styled(FaIcons.FaSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 15px;
  color: ${colors.primary};
  margin-left: 20px;

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    top: 20px;
    width: 15px;
    height: 15px;
  }
`;
export const SearchDevider = styled(FaIcons.FaGripLinesVertical)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 70%;
  top: 15px;
  color: ${colors.primary};
  margin-left: 20px;
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    width: 20px;
    height: 20px;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: center;
  left: 80%;
  top: 15px;
  position: absolute;
  text-align: center;
  font-weight: 670;
`;

export const CategoryLabel = styled.span`
  font-size: 1rem;
  left: 76%;
  top: 15px;
  text-align: center;
  font-weight: 570;
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    font-size: 0.7rem;
  }
`;

export const CategoryIcon = styled(FaIcons.FaAngleDown)`
  width: 20px;
  height: 20px;
  top: 15px;
  color: ${colors.primary};
  margin-left: 20px;
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    margin-left: 0px;
  }
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

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import {
  colors,
  max_960_responsive_screen_size,
} from "../../constants/constants";

export const SearchBoxContainer = styled.div`
  width: 80%;
  margin: 2rem auto 2rem auto;
  text-align: right;
  position: relative;
`;
export const SearchBox = styled.input`
  border: 1px solid ${colors.SecondPrimary};
  border-radius: 25px;
  font-size: 2rem;
  width: 100%;
  padding: 0.2rem;
  padding-left: 4rem;
  transition: width 0.3s;
  /* background: ${colors.secondary}; */
  color: ${colors.SecondPrimary};
  margin-bottom: 5px;
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    padding: 0.25rem;
    padding-left: 4rem;
  }
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
    /* border: 1px solid ${colors.SecondPrimary}; */
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    padding-left: 5rem;
  }
`;
export const SearchIcon = styled(FaIcons.FaSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 20px;
  color: ${colors.SecondPrimary};
  margin-left: 20px;

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    top: 20px;
  }
`;
export const CloseIcon = styled(FaIcons.FaTimes)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 20px;
  color: ${colors.primary};
  margin-left: 20px;

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    top: 20px;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${colors.dark};
  display: block;
`;

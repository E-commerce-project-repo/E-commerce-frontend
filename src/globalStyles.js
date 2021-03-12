import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

import {
  colors,
  constant_variables,
  max_960_responsive_screen_size,
} from "./constants/constants";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? colors.primary : colors.secondary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${colors.white};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) =>
      primary ? colors.secondary : colors.primary};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: ${colors.labelColor};
  display: block;
  font-weight: bold;
`;
export const Input = styled.input`
  padding: 1em;
  color: ${colors.dark};
  background: #fff;
  width: 100%;
  padding: 12px 40px;
  border-radius: 4px;
  display: inline-block;
  border: 1px solid ${colors.sliver};
  box-sizing: border-box;
  outline-color: ${colors.primary};
  background: white;
`;
export const TextArea = styled.textarea`
  padding: 1em;
  color: ${colors.dark};
  background: #fff;
  width: 100%;
  padding: 12px 40px;
  border-radius: 4px;
  display: inline-block;
  border: 1px solid ${colors.sliver};
  box-sizing: border-box;
  outline-color: ${colors.primary};
  text-align: left;
`;
export const Message = styled.span`
  margin-bottom: 0.3em;
  font-size: 1rem;
  color: palevioletred;
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: 10px 1rem 10px;
  transition: width 0.3s;
  color: ${colors.SecondPrimary};
  width: 100%;
  border-radius: ${constant_variables.border_radius};
  border: 1px solid ${colors.sliver};

  :focus {
    outline-color: ${colors.primary};
    outline-color: ${colors.primary};
  }
  :hover {
    outline-color: ${colors.primary};
    outline-color: ${colors.primary};
  }
`;
export const FormGroup = styled.div`
  display: block;
  width: 100%;
  margin-top: 10px;
  position: relative;
`;

export const Option = styled.option`
  font-size: 1rem;
`;
export const CheckboxContainer = styled.div`
  color: ${colors.primary};
  font-size: 19px;
  text-align: center;
  background: red;
  border-radius: 10px;
  width: 15px;
  height: 15px;
`;
export const Checkbox = styled(FaIcons.FaCheckCircle)`
  color: ${colors.primary};
  font-size: 19px;
  text-align: center;
  background: red;
`;

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { colors } from "./constants/constants";
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
      primary ? colors.primary : colors.secondary};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const Container = styled.a`
  background: ${colors.bodyColor};
  /* justify-content: right;
  width: ${({ showCategory }) => (showCategory ? "100%" : "0%")};
  height: ${({ showCategory }) => (showCategory ? " 100vh" : "0%")};
  position: absolute;
  top: ${({ showCategory }) => (showCategory ? 0 : "-100%")};
  transition: all 0.5s ease-in-out;
  top: 55px;
  display: ${({ showCategory }) => (showCategory ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 1rem; */
  /* @media screen and (max-width: 960px) {
    flex-direction: column;
    flex-wrap: nowrap;
  } */
  position: absolute;
  top: 55px;
  width: ${({ showCategory }) => (showCategory ? "100%" : "0%")};
  height: ${({ showCategory }) => (showCategory ? " 100vh" : "0%")};
  min-width: 100%;
  transition: all 0.5s ease-in-out;
  display: ${({ showCategory }) => (showCategory ? "grid" : "none")};
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: scroll;
  padding: 10px;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  :hover {
    cursor: pointer;
  }
`;
export const CategoryListItem = styled.a`
  padding-left: 5px;
  text-align: left;
  /* margin-top: 1px; */
  display: flex;
  font-size: 0.8rem;
  flex-direction: column;
  box-shadow: 0.5px 0.5px ${colors.primary};
  text-align: center;
  justify-content: center;
  margin: 2px;

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

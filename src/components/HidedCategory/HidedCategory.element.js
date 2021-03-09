import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const Container = styled.div`
  background: ${colors.bodyColor};
  justify-content: right;
  width: ${({ showCategory }) => (showCategory ? "100%" : "0%")};
  height: ${({ showCategory }) => (showCategory ? " 100vh" : "0%")};
  position: absolute;
  top: ${({ showCategory }) => (showCategory ? 0 : "-100%")};
  transition: all 0.5s ease-in-out;
  top: 55px;
  display: ${({ showCategory }) => (showCategory ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 1rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
export const CategoryListItem = styled.a`
  padding-left: 5px;
  text-align: left;
  margin-top: 1px;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

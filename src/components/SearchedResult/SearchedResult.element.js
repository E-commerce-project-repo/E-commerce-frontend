import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  font-size: 1.2rem;
  z-index: 999;
  background: ${colors.white};
  height: 1000px;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 9fr;
    display: ${(props) => (props.showCategory ? "grid" : "flex")};
    align-items: center;
    background: ${colors.bodyColor};
  }
`;

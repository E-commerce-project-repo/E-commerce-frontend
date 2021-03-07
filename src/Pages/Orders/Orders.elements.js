import styled from "styled-components";
import { colors, max_responsive_screen_size } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  padding: 5%;
  background: ${colors.bodyColor};
`;

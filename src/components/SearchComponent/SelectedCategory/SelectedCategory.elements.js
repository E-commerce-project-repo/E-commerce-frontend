import {
  colors,
  max_responsive_screen_size,
  max_960_responsive_screen_size,
  max_500_responsive_screen_size,
} from "../../../constants/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  background: ${colors.secondary};
  justify-content: left;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
  @media screen and (max-width: ${max_500_responsive_screen_size}) {
    flex-direction: row;
    display: flex;
  }
`;

export const CategoryListItem = styled.button`
  background: ${colors.primary};
  color: ${colors.secondary};
  padding: 5px;
  margin: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  @media screen and (max-width: ${max_responsive_screen_size}) {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }
  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    border-radius: 10px;
  }
`;

export const Item = styled.span`
  text-decoration: none;
  font-size: 13px;
  text-align: left;
`;
export const Title = styled.span`
  text-decoration: none;
  font-size: 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
`;

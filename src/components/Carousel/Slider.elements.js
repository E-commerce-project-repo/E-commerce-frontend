import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constants/constants";

export const BodyLink = styled(Link)`
  :hover {
    cursor: pointer;
  }
`;
export const SliderBox = styled(Link)`
  min-height: 520px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1600px) {
    min-height: 420px;
  }
  @media (max-width: 1250px) {
    min-height: 290px;
  }
  @media (max-width: 1090px) {
    min-height: 281px;
  }
  @media (max-width: 500px) {
    min-height: 250px;
  }
`;

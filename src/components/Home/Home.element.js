import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const SlidderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colors.bodyColor};
  overflow: hidden;
`;
export const SlidItemWrapper = styled.div`
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 30s slidy infinite;
  overflow: hidden;

  @keyframes slidy {
    0% {
      left: 0%;
    }
    20% {
      left: 0%;
    }
    25% {
      left: -100%;
    }
    45% {
      left: -100%;
    }
    50% {
      left: -200%;
    }
    70% {
      left: -200%;
    }
    75% {
      left: -300%;
    }
    95% {
      left: -300%;
    }
    100% {
      left: -400%;
    }
  }
`;

export const LeftPaginationArrow = styled(FaIcons.FaAngleDoubleLeft)`
  display: flex;
  font-size: 2rem;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;
export const RightPaginationArrow = styled(FaIcons.FaAngleDoubleRight)`
  align-items: center;
  font-size: 2rem;

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
`;

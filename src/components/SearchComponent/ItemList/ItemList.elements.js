import styled from "styled-components";
import {
  colors,
  max_960_responsive_screen_size,
} from "../../../constants/constants";

export const ResultItem = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.secondary};
  color: ${colors.SecondPrimary};
  font-size: 1.2rem;
  width: 100%;
  border-radius: 2px;
  margin: 2px;
  align-items: center;
  border: 2px solid #f5f5f1;
  border-radius: 7px;
  :hover {
    background: ${colors.SecondPrimary};
    color: ${colors.secondary};
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    margin-left: 30px;
  }

  @media screen and (max-width: ${max_960_responsive_screen_size}) {
    font-size: 15px;
    :hover {
      background: ${colors.SecondPrimary};
      color: ${colors.secondary};
      cursor: pointer;
      transform: scale(1.06);
      transition: all 0.3s ease-out;
    }
  }
`;
export const IndexIcon = styled.span`
  background-color: #e7eaf3;
  color: var(--text-normal);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  line-height: 2.5rem;
  display: inline-flex;
  transform-origin: center;
  align-items: center;
  justify-content: center;
  position: relative;
  :hover {
    background: ${colors.success};
  }
`;
export const CheckedIcon = styled.span`
  background-color: ${colors.success};
  color: var(--text-normal);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  line-height: 2.5rem;
  display: inline-flex;
  transform-origin: center;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.div`
  text-align: left;
  margin: 0 auto;
  margin-left: 10px;
  font-size: 15px;
  width: 100%;
  overflow-wrap: break-word;
`;

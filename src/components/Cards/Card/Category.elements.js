import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../constants/constants";

export const Card = styled.div`
  margin: 0 1rem;
  width: 100px;
  background-color: ${colors.white};
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  padding: 0.3rem;

  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

export const CategoryImg = styled.img`
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction: column;
  border-radius: 10rem;
  border: 2px solid red;
  margin-bottom: 0.7rem;
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
`;
export const CategoryTitle = styled.span`
  font-weight: 670;
  font-size: 0.7rem;
`;

export const CategoryDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
`;

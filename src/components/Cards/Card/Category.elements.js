import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const Card = styled(Link)`
  /* margin: 0 0.5rem; */
  width: 100px;
  /* background-color: ${colors.white}; */
  align-items: center;
  /* margin: 10px; */
  border-radius: 5px;
  padding: 0.3rem;
  /* border: 1px solid ${colors.gray}; */
  text-decoration: none;
  color: ${colors.primary};
`;

export const CategoryImg = styled(FaIcons.FaTshirt)`
  height: 60px;
  width: 60px;
  padding: 20%;
  display: flex;
  flex-direction: column;
  border-radius: 10rem;
  border: 1px solid ${colors.gray};
  margin-bottom: 0.7rem;
  color: ${colors.dark};
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
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
  /* font-weight: 670; */
  font-size: 0.7rem;
  color: ${colors.dark};
`;

export const CategoryDesc = styled.p`
  margin-bottom: 1px;
  font-size: 12px;
`;

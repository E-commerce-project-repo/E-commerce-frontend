import styled from "styled-components";
import FeaturePic from "../../../images/mac1.jpg";
import { colors } from "../../../constants/constants";
import { Link } from "react-router-dom";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
`;
export const FeatureButton = styled(Link)`
  font-size: 1.4rem;
  padding: 0.6rem 1.5rem;
  border: none;
  background: ${colors.secondary};
  color: ${colors.white};
  transition: 0.2s ease-out;
  border-radius: 2px;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: ${colors.primary};
    transform: scale(1.06);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
export const ProfileLink = styled(Link)`
  font-size: 1.5rem;
  text-align: center;
  /* margin-bottom: 1rem; */
  font-size: 1.5rem;
  color: ${colors.white};
  /* text-decoration: none; */
  :hover {
    color: ${colors.primary};
    transition: all 2 ease-in-out;
    transform: scale(1.06);
  }
`;

export const Price = styled.h2`
  width: 100%;
  text-align: center;
  align-items: center;
`;

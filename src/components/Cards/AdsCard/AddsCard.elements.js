import styled from "styled-components";
import FeaturePic from "../../../images/mac1.jpg";
import {
  colors,
  max_960_responsive_screen_size,
} from "../../../constants/constants";
import { Link } from "react-router-dom";

export const FeatureContainer = styled(Link)`
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  color: #fff;
  text-align: left;
  padding: 0 1rem;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  background-image: linear-gradient(
      90deg,
      rgba(100, 0, 0, 0.6) 22%,
      rgba(0, 0, 0, 0)
    ),
    url(${FeaturePic});
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
  width: 10rem;
  background-color: red;

  &:hover {
    color: #fff;
    background: ${colors.primary};
    transform: scale(1.06);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
export const OverviewContainer = styled.div`
  font-size: 16px;
  color: ${colors.white};
  padding-right: 20px;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-style: italic;
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${max_960_responsive_screen_size}) {
    width: 100%;
  }
`;
export const Overview = styled.div`
  font-size: 16px;
  color: ${colors.white};
  padding-right: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-style: italic;
  @media (max-width: ${max_960_responsive_screen_size}) {
    width: 100%;
  }
  @media (max-width: 1800px) {
    -webkit-line-clamp: 6;
  }
  @media (max-width: 1700px) {
    -webkit-line-clamp: 8;
  }
`;

export const Title = styled.h1`
  margin: 20px 0;
  font-weight: normal;
  line-height: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${colors.white};
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 590;

  @media (max-width: 1700px) {
    font-size: 42px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

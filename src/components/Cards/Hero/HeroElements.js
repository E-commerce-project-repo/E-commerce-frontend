import styled from "styled-components";
import { colors } from "../../../constants/constants";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  height: calc(60vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeroContent = styled.div`
  height: calc(60vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  padding: 2rem 2rem;
  color: #fff;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const Price = styled.h3`
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
  align-items: center;
`;

export const HeroBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: ${colors.secondary};
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: ${colors.primary};
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

export const ProductCategoryImg = styled.img`
  width: 250px;
  height: 200px;
  border: none;
  color: #fff;
  transition: 0.2s ease-out;
  border: 0;
  box-shadow: 4px ${colors.secondary};
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

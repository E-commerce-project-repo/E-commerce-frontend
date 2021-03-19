import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  background: ${colors.bodyColor};

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  border: 2px solid ${colors.white};
  @media screen and (max-width: 960px) {
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  padding-left: 2rem;
  @media screen and (max-width: 960px) {
  }
`;
export const ItemBodyContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  background: ${colors.bodyColor};
  flex-direction: row;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: ${colors.white}; */
  border: 2px solid ${colors.white};
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.white};
  border: 2px solid ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  border: 2px solid ${colors.white};
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;
export const ItemImage = styled.img`
  width: ${({ fullSize }) => (fullSize ? "100%" : "80px")};
  height: ${({ fullSize }) => (fullSize ? "100%" : "80px")};
  max-width: 700px;
  max-height: 700px;
  border-radius: 0.5rem;
  margin: 0.2rem;
  border: ${({ fullSize }) => (fullSize ? "" : `1px solid ${colors.primary}`)};

  box-shadow: ${({ fullSize }) =>
    fullSize ? `1px 1px ${colors.secondary}` : ``};

  &:hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: ${colors.secondary};
  }
  @media screen and (max-width: 960px) {
    width: ${({ fullSize }) => (fullSize ? "100%" : "60px")};
    height: ${({ fullSize }) => (fullSize ? "80%" : "60px")};
  }
`;

export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  border: 2px solid ${colors.bodyColor};
  width: 30%;
  @media screen and (max-width: 960px) {
    font-size: 0.72rem;
    width: 100%;
  }
`;
export const ItemDetailHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  border: 2px solid ${colors.bodyColor};
  background: ${colors.bodyColor};
  @media screen and (max-width: 960px) {
  }
`;

export const ItemDetailGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px ${colors.secondary};
`;
export const ItemDetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding: 5px;

  @media screen and (max-width: 960px) {
  }
`;
export const ItemDetailHeader = styled.h6`
  text-align: left;
  color: ${colors.dark};

  @media screen and (max-width: 960px) {
  }
`;

export const ItemDetailValue = styled.span`
  font-size: 12px;
  text-align: left;

  @media screen and (max-width: 960px) {
  }
`;
export const CheckedIcon = styled(FaIcons.FaChevronCircleRight)`
  color: ${colors.success};
  margin-right: 3px;
  align-items: center;
  font-size: 12px;
`;
export const AdditionalInfo = styled.h2`
  font-size: 15px;
  text-align: left;
  color: ${colors.dark};
  box-shadow: 2px 2px ${colors.white};
  margin-top: 10px;

  @media screen and (max-width: 960px) {
  }
`;
export const ItemDescriptionHeader = styled.p`
  font-size: 15px;
  font-weight: 570;
  text-align: left;
  color: ${colors.dark};
  margin-top: 7px;

  @media screen and (max-width: 960px) {
  }
`;
export const ItemDescription = styled.p`
  font-size: 14px;
  text-align: left;
  color: ${colors.dark};
  box-shadow: 2px 2px ${colors.bodyColor};

  @media screen and (max-width: 960px) {
  }
`;
export const ItemTermAndCondition = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${colors.dark};
  box-shadow: 2px 2px ${colors.bodyColor};
  @media screen and (max-width: 960px) {
  }
`;
export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  height: 100vh;
  margin-left: 2rem;
  overflow-y: scroll;
  @media screen and (max-width: 960px) {
  }
`;
export const RelatedItemCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: red;
`;
export const RelatedItemHeader = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  font-weight: 670;
`;

export const ProfileButton = styled(Link)`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  border: none;
  background: ${colors.secondary};
  color: #fff;
  transition: 0.2 ease-out;
  margin-top: 15px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: ${colors.bodyColor};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

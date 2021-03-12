import styled from "styled-components";
import { colors, max_responsive_screen_size } from "../../constants/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: auto;
  padding: 2% 2% 2%;
  overflow-y: scroll;
  height: auto;
  margin: 2rem;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 760px) {
    width: 100%;
    align-items: center;
  }
`;
export const ProfileImg = styled.img`
  height: 150px;
  width: 150px;
  display: flex;
  box-shadow: 2px 2px ${colors.secondary};
  margin-right: 2rem;
  border-radius: 6rem;
`;

export const PersonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media screen and (max-width: 760px) {
    width: 100%;
    align-items: center;
  }
`;

export const LabelDetail = styled.p`
  padding-right: 4%;
`;
export const VerticalGap = styled.div`
  height: 1rem;
`;

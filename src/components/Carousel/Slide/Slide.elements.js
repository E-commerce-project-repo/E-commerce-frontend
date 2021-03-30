// import styled from "styled-components";
// import {
//   colors,
//   max_960_responsive_screen_size,
// } from "../../../constants/constants";
// import { Link } from "react-router-dom";

// export const SlideContainer = styled(Link)`
//   display: flex;
//   align-items: flex-start;
//   height: 100%;
//   justify-content: flex-end;
// `;

// export const SlideInfo = styled.div`
//   height: 100%;
//   padding-left: 100px;
//   padding-right: 400px;
//   position: absolute;
//   z-index: 1;
//   width: 70%;
//   left: 0;
//   text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
//   width: 40%;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: ${max_960_responsive_screen_size}) {
//     width: 100%;
//   }
//   background-image: linear-gradient(
//     90deg,
//     rgba(0, 0, 0, 1) 22%,
//     rgba(0, 0, 0, 0)
//   );
//   @media (max-width: ${max_960_responsive_screen_size}) {
//     width: 100%;
//     padding: 10px;
//     font-size: 9px;
//   }
// `;
// export const SliderImageContainer = styled.div`
//   height: 100%;
//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//     position: absolute;
//     left: -50%;
//     right: -50%;
//     margin: auto;
//   }
//   @media (max-width: 500px) {
//     height: 100%;
//     width: initial;
//   }
// `;
// export const SliderImage = styled.img``;
// export const SliderScores = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `;
// export const TitleContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const Title = styled.h1`
//   margin: 20px 0;
//   font-size: 52px;
//   font-weight: normal;
//   line-height: 1em;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   color: ${colors.secondary};
//   @media (max-width: 1700px) {
//     font-size: 42px;
//   }
//   @media (max-width: 500px) {
//     font-size: 30px;
//     margin-bottom: 10px;
//   }
// `;
// export const Caption = styled.div`
//   margin-top: 0;
//   margin-bottom: 0;
//   font-weight: lighter;
//   font-size: 32px;
//   font-style: italic;
//   line-height: 1.2em;
//   text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
//   font-size: clamp(3rem, 5vw, 5rem);
//   font-weight: bold;
//   color: ${colors.white};
//   @media (max-width: 1090px) {
//     font-size: 24px;
//   }
//   @media (max-width: 500px) {
//     font-weight: normal;
//     color: #fff;
//     overflow: hidden;
//     display: -webkit-box;
//     -webkit-line-clamp: 1;
//     -webkit-box-orient: vertical;
//   }
// `;
// export const CaptionContainer = styled.h2`
//   margin-bottom: 10px;
//   color: ${colors.primary};
//   @media (max-width: 1250px) {
//     margin-bottom: 10px;
//   }
// `;
// export const Overview = styled.div`
//   font-size: 16px;
//   color: ${colors.white};
//   padding-right: 20px;
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-line-clamp: 7;
//   -webkit-box-orient: vertical;
//   font-style: italic;
//   @media (max-width: 1800px) {
//     -webkit-line-clamp: 6;
//   }
//   @media (max-width: 1700px) {
//     -webkit-line-clamp: 8;
//   }
// `;
// export const LogoImgContainer = styled.div``;
// export const LogoImg = styled.img`
//   width: 250px;
//   max-width: 400px;
//   margin-top: 20px;
//   border-radius: 1rem;
// `;

// export const Button = styled(Link)`
//   border-radius: 4px;
//   background: ${({ primary }) => (primary ? colors.primary : colors.secondary)};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
//   color: ${colors.white};
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.3s ease-out;
//     background-color: ${({ primary }) =>
//       primary ? colors.secondary : colors.primary};
//   }

//   @media (max-width: ${max_960_responsive_screen_size}) {
//     display: none;
//   }
// `;

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
  padding-left: 3rem;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 22%,
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
  @media (max-width: ${max_960_responsive_screen_size}) {
    display: none;
  }
`;
export const OverviewContainer = styled.div`
  font-size: 16px;
  color: ${colors.white};
  padding-right: 20px;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-style: italic;
  width: 45%;
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

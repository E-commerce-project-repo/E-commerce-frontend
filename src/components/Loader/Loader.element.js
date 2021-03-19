import styled from "styled-components";
import { colors } from "../../constants/constants";
import * as FaIcons from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
export const LoaderBackground = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  /* height: 80vh; */
  width: 90%;
`;

export const LoaderBox = styled.div`
  height: 100px;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: darkgray;
  border: 0;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 100%;

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;
export const LoaderSlides = styled.ul``;

export const LoaderSlide = styled.li`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  margin-left: 10px;
  background-color: #dddbdd;
  width: ${({ width }) => width};
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: darkgray;
  border: 0;
  border: 0px;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 100%;

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;
export const DoubleLoaderSpinner = styled.div`
  /* width: 50px;
  height: 50px; */
  display: flex;
  justify-content: center;
`;

export const Loading = styled.div`
  height: 55px;
  width: 55px;
  border: 5px solid transparent;
  border-top-color: ${colors.primary};
  border-bottom-color: ${colors.primary};
  border-radius: 50%;
  position: relative;
  animation: spin 1s linear infinite;
  ::before {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    border: 5px solid transparent;
    border-top-color: ${colors.secondary};
    border-bottom-color: ${colors.secondary};
    border-radius: 50%;
    animation: spin 0.5s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spinBack {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-720deg);
    }
  }
`;

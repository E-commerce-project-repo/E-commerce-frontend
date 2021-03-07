import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/constants";
export const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: auto;
  height: auto;
`;
export const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;
export const SlideShowDots = styled.div`
  text-align: center;
  background: transparent;
`;

export const SlideDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;
`;
export const Active = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: red;
  .active {
    background-color: #6a0dad;
  }
`;

export const Slide = styled.div`
  display: inline-block;
  height: 50%;
  width: 100%;
  border-radius: 40px;
`;

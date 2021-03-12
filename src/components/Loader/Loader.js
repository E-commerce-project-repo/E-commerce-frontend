import { useState } from "react";
import {
  Container,
  LoaderBackground,
  LoaderBox,
  LoaderSlide,
  LoaderSlides,
  LoaderContainer,
  DoubleLoaderSpinner,
  Loading,
} from "./Loader.element";
export const Loader = () => {
  return (
    <Container>
      <LoaderBackground>
        <LoaderBox />
        <LoaderSlides>
          <LoaderSlide width={"80%"} />
          <LoaderSlide width={"60%"} />
          <LoaderSlide width={"90%"} />
          <LoaderSlide width={"100%"} />
        </LoaderSlides>

        <LoaderBox />
        <LoaderSlides>
          <LoaderSlide width={"90%"} />
          <LoaderSlide width={"60%"} />
          <LoaderSlide width={"100%"} />
          <LoaderSlide width={"70%"} />
        </LoaderSlides>

        <LoaderBox />
        <LoaderSlides>
          <LoaderSlide width={"30%"} />
          <LoaderSlide width={"90%"} />
          <LoaderSlide width={"33%"} />
          <LoaderSlide width={"67%"} />
        </LoaderSlides>
      </LoaderBackground>
    </Container>
  );
};

export const DoubleLoader = () => {
  return (
    <DoubleLoaderSpinner>
      <Loading />
    </DoubleLoaderSpinner>
  );
};

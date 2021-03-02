import React from "react";

import {
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideDot,
  Slide,
  Active,
} from "./Slide.elements";
import { Hero } from "../Hero/index";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;
export const Slider = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideShow>
      <SlideShowSlider
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {data.map((backgroundColor, index) => ( */}
        <Slide className="slide">
          <Hero />
        </Slide>
        <Slide className="slide">
          <Hero />
        </Slide>
        <Slide className="slide">
          <Hero />
        </Slide>
        <Slide className="slide">
          <Hero />
        </Slide>
      </SlideShowSlider>
      <SlideShowDots>
        {/* {data.map((_, idx) => ( */}
        <SlideDot
          // key={idx}
          key={1}
          className="active"
          onClick={() => {
            setIndex(1);
            // setIndex(idx);
          }}
        ></SlideDot>
        <SlideDot
          // key={idx}
          key={2}
          className=""
          onClick={() => {
            setIndex(2);
            // setIndex(idx);
          }}
        ></SlideDot>

        <Active />
        {/* ))} */}
      </SlideShowDots>
    </SlideShow>
  );
};

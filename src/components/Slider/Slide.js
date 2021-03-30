import React from "react";
import {
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideDot,
  Slide,
  Active,
} from "./Slide.elements";
import { AddWithImage } from "../Cards/AdsCard/AddsCard";
const delay = 20000;
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
          prevIndex === data.length - 1 ? 1 : prevIndex + 1
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
        index={index}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {data.map((item, index) => {
          return (
            <Slide>
              <AddWithImage data={item} />
            </Slide>
          );
        })}
      </SlideShowSlider>
    </SlideShow>
  );
};

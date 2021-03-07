import React from "react";
import {
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideDot,
  Slide,
  Active,
} from "./Slide.elements";
import { Hero } from "../Cards/Hero/index";
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
              <Hero data={item} />
            </Slide>
          );
        })}
      </SlideShowSlider>

      <SlideShowDots>
        {data.map((_, idx) => {
          return index === idx ? (
            <Active />
          ) : (
            <SlideDot
              key={idx}
              onClick={() => {
                setIndex(idx);
              }}
            ></SlideDot>
          );
        })}
      </SlideShowDots>
    </SlideShow>
  );
};

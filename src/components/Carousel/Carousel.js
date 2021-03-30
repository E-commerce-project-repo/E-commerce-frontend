import React, { useEffect } from "react";
import { Slider } from "./Slide/Slide";
import { DoubleLoader } from "../Loader/Loader";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/mac1.jpg";
import * as premiumItemAction from "../../store/item/premiumItem";
import { useDispatch, useSelector } from "react-redux";
import "./awesome-slider-override.css";
import * as Elements from "./Slider.elements";
import { addViewItem } from "../../helper/add_viewed_item";
const AutoplaySlider = withAutoplay(AwesomeSlider);

export const CarouselSlider = () => {
  const cardClicked = (data) => {
    return dispatch(addViewItem(data));
  };
  useEffect(() => {
    dispatch(premiumItemAction.premiumItems());
  }, []);
  const dispatch = useDispatch();
  const premiumItems = useSelector((state) => state.premiumItems);

  let slides = null;
  let startup = null;
  slides = premiumItems.payload.map((slide, index) => {
    startup = <DoubleLoader />;
    return (
      <Elements.BodyLink to={"/single/" + slide.id}>
        <Slider data={slide} onclick={cardClicked} />
      </Elements.BodyLink>
    );
  });

  return (
    <Elements.SliderBox>
      {premiumItems.payload ? (
        <AutoplaySlider
          startupScreen={startup}
          play={true}
          cssModule={AwsSliderStyles}
          interval={5000000}
        >
          {slides}
        </AutoplaySlider>
      ) : null}
    </Elements.SliderBox>
  );
};

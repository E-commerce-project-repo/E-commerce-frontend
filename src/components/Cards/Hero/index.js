import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroItemsWrap,
  HeroH1,
  Price,
  HeroBtn,
  Desc,
} from "./HeroElements";

export const Hero = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer image={data.img}>
      <HeroContent>
        <HeroItems>
          <HeroH1>{data.name}</HeroH1>
          <Price>{data.price}</Price>
          <HeroBtn>{data.button}</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  Price,
  HeroBtn,
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
          <HeroH1>Macbook pro pc for sale</HeroH1>
          <Price>{data.price}</Price>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

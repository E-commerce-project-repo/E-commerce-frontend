import { useState } from "react";
import {
  ImageContainer,
  ItemContainer,
  ItemHeader,
  ItemBodyContainer,
  ItemDetailContainer,
  ItemImage,
  ItemDetailHeaderInfo,
  ItemDetailGroupContainer,
  ItemDetailGroup,
  ItemDetailHeader,
  ItemDetailValue,
  AdditionalInfo,
  CheckedIcon,
  ItemTermAndCondition,
  ItemDescription,
  ItemDescriptionHeader,
  ImagesWrapper,
  ProfileButton,
} from "./Single.element";
import sweet3 from "../../images/mac1.jpg";
import person from "../../images/person.jpeg";
import { PersonProfileInfo } from "../Cards/Card/Card";

export const SingleItem = () => {
  const [page, setPage] = useState(0);
  const [fullSize, setFullSize] = useState(sweet3);

  return (
    <ItemContainer>
      <ItemHeader>Macprobook 2017</ItemHeader>
      <ItemBodyContainer>
        <ImageContainer>
          <ItemImage src={fullSize} fullSize={true} />
          <ImagesWrapper>
            <ItemImage src={sweet3} onClick={() => setFullSize(sweet3)} />
            <ItemImage src={person} onClick={() => setFullSize(person)} />
            <ItemImage src={sweet3} onClick={() => setFullSize(sweet3)} />
            <ItemImage src={person} onClick={() => setFullSize(person)} />
            <ItemImage src={person} onClick={() => setFullSize(person)} />
          </ImagesWrapper>
        </ImageContainer>

        <ItemDetailContainer>
          <ItemDetailHeaderInfo>
            <ItemDetailGroupContainer>
              <ItemDetailGroup>
                <ItemDetailHeader>Name</ItemDetailHeader>
                <ItemDetailValue>
                  <CheckedIcon />
                  Headphones Skull Candy asasa
                </ItemDetailValue>
              </ItemDetailGroup>

              <ItemDetailGroup>
                <ItemDetailHeader>Condition</ItemDetailHeader>
                <ItemDetailValue>
                  <CheckedIcon />
                  Very Used
                </ItemDetailValue>
              </ItemDetailGroup>

              <ItemDetailGroup>
                <ItemDetailHeader>Availability</ItemDetailHeader>
                <ItemDetailValue>
                  <CheckedIcon />
                  Available
                </ItemDetailValue>
              </ItemDetailGroup>
              <ItemDetailGroup>
                <ItemDetailHeader>Price</ItemDetailHeader>
                <ItemDetailValue>
                  <CheckedIcon />
                  $250
                </ItemDetailValue>
              </ItemDetailGroup>
            </ItemDetailGroupContainer>

            <AdditionalInfo>ADDITIONAL INFORMATION</AdditionalInfo>
            <ItemDetailGroup>
              <ItemDescriptionHeader>Discription</ItemDescriptionHeader>
              <ItemDescription>
                On the other hand, you might engage with a law firm that will
                make a fresh out of college intern copy/paste the standard legal
                templates for you.
              </ItemDescription>
            </ItemDetailGroup>
            <ProfileButton to="/carts">Add Cart</ProfileButton>
            <ItemTermAndCondition></ItemTermAndCondition>
          </ItemDetailHeaderInfo>
          <PersonProfileInfo person={person} />
        </ItemDetailContainer>
      </ItemBodyContainer>
    </ItemContainer>
  );
};

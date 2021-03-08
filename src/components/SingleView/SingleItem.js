import { useState } from "react";
import {
  Container,
  SubContainer,
  ImageContainer,
  ItemContainer,
  ItemHeader,
  ItemBodyContainer,
  ItemDetailContainer,
  RightSideContainer,
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
  RelatedItemHeader,
  ProfileButton,
  RelatedItemCardsWrapper,
} from "./Single.element";
import sweet3 from "../../images/mac1.jpg";
import person from "../../images/person.jpeg";
import { ItemCard, PersonProfileInfo } from "../Cards/Card/Card";
import { productData, productDataTwo } from "../CategoryGrid/data";
import { ItemGrid } from "../ItemGrid/ItemGrid";

export const SingleItem = () => {
  const [page, setPage] = useState(0);
  const [fullSize, setFullSize] = useState(sweet3);

  return (
    <>
      <Container>
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
                    On the other hand, you might engage with a law firm that
                    will make a fresh out of college intern copy/paste the
                    standard legal templates for you.
                  </ItemDescription>
                </ItemDetailGroup>
                <ProfileButton>Contact Seller</ProfileButton>
                <ItemTermAndCondition></ItemTermAndCondition>
              </ItemDetailHeaderInfo>
              <PersonProfileInfo person={person} />
            </ItemDetailContainer>
          </ItemBodyContainer>
        </ItemContainer>
      </Container>
      <ItemGrid title="Related Products" data={productData} />
      <ItemGrid title="Customers also viewed" data={productData} />
    </>
  );
};

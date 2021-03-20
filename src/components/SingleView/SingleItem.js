import { useState, useEffect } from "react";
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
  SubContainer,
  RelatedItemCardsWrapper,
} from "./Single.element";
import sweet3 from "../../images/mac1.jpg";
import person from "../../images/person.jpeg";
import { PersonProfileInfo } from "../Cards/Card/Card";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../constants/constants";
import { category } from "../../store/category";
import * as itemAction from "../../store/item/item";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { ItemCard } from "../Cards/Card/Card";
import { Redirect } from "react-router";

export const SingleItem = (props) => {
  const item = props.location?.data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemAction.list());
    dispatch(itemAction.add());
  }, []);
  const topSales = useSelector((state) => state.item);

  const [page, setPage] = useState(0);
  const [fullSize, setFullSize] = useState(sweet3);

  if (!item) {
    return <Redirect to={config.home} />;
  }

  return (
    <>
      <ItemContainer>
        <ItemBodyContainer>
          <SubContainer>
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
            <ItemGrid title="Related Items" data={topSales.payload} />
          </SubContainer>
          <ItemDetailContainer>
            <ItemDetailHeaderInfo>
              <ItemDetailGroupContainer>
                <ItemDetailGroup>
                  <ItemDetailHeader>Product Title</ItemDetailHeader>
                  <ItemDetailValue>
                    <CheckedIcon />
                    {item.title}
                  </ItemDetailValue>
                </ItemDetailGroup>

                <ItemDetailGroup>
                  <ItemDetailHeader>Condition</ItemDetailHeader>
                  <ItemDetailValue>
                    <CheckedIcon />
                    {item.condition}
                  </ItemDetailValue>
                </ItemDetailGroup>

                <ItemDetailGroup>
                  <ItemDetailHeader>Availabile Quantity</ItemDetailHeader>
                  <ItemDetailValue>
                    <CheckedIcon />
                    {item.items_in_stock}
                  </ItemDetailValue>
                </ItemDetailGroup>
                <ItemDetailGroup>
                  <ItemDetailHeader>Price</ItemDetailHeader>
                  <ItemDetailValue>
                    <CheckedIcon />
                    $250
                  </ItemDetailValue>
                </ItemDetailGroup>
                <ItemDetailGroup>
                  <ItemDetailHeader>Location</ItemDetailHeader>
                  <ItemDetailValue>
                    <CheckedIcon />
                    {item.location}
                  </ItemDetailValue>
                </ItemDetailGroup>
                <ItemDetailGroup>
                  <ItemDetailHeader>Shop</ItemDetailHeader>
                  <ItemDetailValue>
                    <CheckedIcon />
                    {item.shop.name}
                  </ItemDetailValue>
                </ItemDetailGroup>
              </ItemDetailGroupContainer>

              <AdditionalInfo>ADDITIONAL INFORMATION</AdditionalInfo>
              <ItemDetailGroup>
                <ItemDescriptionHeader>Discription</ItemDescriptionHeader>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemDetailGroup>
              <ItemDetailGroup>
                <ItemDescriptionHeader>
                  Term and Condition
                </ItemDescriptionHeader>
                <ItemDescription>{item.term_and_conditions}</ItemDescription>
              </ItemDetailGroup>
              <ProfileButton to="/carts">Add Cart</ProfileButton>
              <ItemTermAndCondition></ItemTermAndCondition>
            </ItemDetailHeaderInfo>
            <PersonProfileInfo data={item.owner} />
          </ItemDetailContainer>
        </ItemBodyContainer>
      </ItemContainer>
      <ItemGrid title="Customer also views" data={topSales.payload} />
    </>
  );
};

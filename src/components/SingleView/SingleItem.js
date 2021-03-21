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
import { config, apiConfig } from "../../constants/constants";
import * as relatedItemAction from "../../store/item/relatedItem";
import * as customerAlsoViewedAction from "../../store/item/customerAlsoViewed";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { Redirect } from "react-router";
export const SingleItem = (props) => {
  const [pageRelatedItem, setPageRelatedItem] = useState(0);
  const [pageItemView, setPageItemView] = useState(0);

  const item = props.location?.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(relatedItemAction.relatedItem());
    dispatch(customerAlsoViewedAction.customerAlsoViews());
  }, []);

  const nextPage = (nextUrl) => {
    dispatch(relatedItemAction.relatedItem(nextUrl));
    setPageRelatedItem(pageRelatedItem + 1);
  };
  const prevPage = (previousUrl) => {
    dispatch(relatedItemAction.relatedItem(previousUrl));
    setPageRelatedItem(pageRelatedItem - 1);
  };
  const currentPage = (currentIndex) => {
    setPageRelatedItem(currentIndex);
    dispatch(
      relatedItemAction.relatedItem(
        apiConfig.root + apiConfig.item + `?offset=${4 * currentIndex}&limit=4`
      )
    );
  };

  const nextPageViewedItem = (nextUrl) => {
    dispatch(customerAlsoViewedAction.customerAlsoViews(nextUrl));
    setPageItemView(pageItemView + 1);
  };
  const prevPageViewedItem = (previousUrl) => {
    dispatch(customerAlsoViewedAction.customerAlsoViews(previousUrl));
    setPageItemView(pageItemView - 1);
  };
  const currentPageViewedItem = (currentIndex) => {
    setPageItemView(currentIndex);
    dispatch(
      customerAlsoViewedAction.customerAlsoViews(
        apiConfig.root + apiConfig.item + `?offset=${5 * currentIndex}&limit=5`
      )
    );
  };

  const relatedItems = useSelector((state) => state.relatedItem);
  const customerAlsoViewes = useSelector((state) => state.customerAlsoViews);

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
            {relatedItems.loading ? (
              <Loader />
            ) : (
              <ItemGrid
                title="Related Items"
                data={relatedItems.payload}
                nextPage={nextPage}
                prevPage={prevPage}
                number_in_page={4}
                count={relatedItems.count}
                nextUrl={relatedItems.nextUrl}
                previousUrl={relatedItems.previousUrl}
                page={pageRelatedItem}
                currentPage={currentPage}
              />
            )}
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
            <PersonProfileInfo data={item} />
          </ItemDetailContainer>
        </ItemBodyContainer>
      </ItemContainer>

      {customerAlsoViewes.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Customer also viewed"
          data={customerAlsoViewes.payload}
          nextPage={nextPageViewedItem}
          prevPage={prevPageViewedItem}
          number_in_page={5}
          count={customerAlsoViewes.count}
          nextUrl={customerAlsoViewes.nextUrl}
          previousUrl={customerAlsoViewes.previousUrl}
          page={pageItemView}
          currentPage={currentPageViewedItem}
        />
      )}
    </>
  );
};

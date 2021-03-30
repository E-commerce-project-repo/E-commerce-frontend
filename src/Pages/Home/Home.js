import { useState, useEffect } from "react";

import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { CategoryGrid } from "../../components/CategoryGrid/CategoryGrid";
import { AddWithImage } from "../../components/Cards/AdsCard/AddsCard";
import { PopularThisWeek } from "../../components/popularWeeks/CardBuilder";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { colors, apiConfig } from "../../constants/constants";
import * as categoryAction from "../../store/category";
import * as itemAction from "../../store/item/latestItem";
import * as topViewedItemsAction from "../../store/item/topViewedItems";
import * as topSalesAction from "../../store/item/topSales";
import * as popularThisWeekAction from "../../store/item/popularThisWeek";
import * as premiumItemAction from "../../store/item/premiumItem";
import { HeightGap, WidthGap } from "../../globalStyles";
import { CarouselSlider } from "../../components/Carousel/Carousel";
function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log("length", randomIndex);
  // get random item
  const item = arr[randomIndex];

  return item;
}
export const Home = () => {
  const categoryPayload = useSelector((state) => state.category);
  const newItems = useSelector((state) => state.latestItem);
  const topSales = useSelector((state) => state.topSales);
  const topViewedItems = useSelector((state) => state.topViewedItems);
  const popularThisWeek = useSelector((state) => state.popularThisWeek);
  const premiumItems = useSelector((state) => state.premiumItems);
  var [page, SetIsActive] = useState(0);
  var [pageTopItem, setPageTopItem] = useState(0);
  var [pageTreding, setPageTreding] = useState(0);
  var [pagePopular, setPagePopular] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryAction.category());
    dispatch(itemAction.list());
    dispatch(topViewedItemsAction.topViewedItems());
    dispatch(topSalesAction.topSales());
    dispatch(popularThisWeekAction.popularThisWeek());
    dispatch(premiumItemAction.premiumItems());
  }, []);

  const nextPage = (nextUrl) => {
    dispatch(itemAction.list(nextUrl));
    SetIsActive(page + 1);
  };
  const prevPage = (previousUrl) => {
    dispatch(itemAction.list(previousUrl));
    SetIsActive(page - 1);
  };
  const currentPage = (currentIndex) => {
    SetIsActive(currentIndex);
    dispatch(
      itemAction.list(
        apiConfig.root +
          apiConfig.item +
          `?offset=${10 * currentIndex}&limit=10`
      )
    );
  };

  const nextPageTopItems = (nextUrl) => {
    dispatch(topSalesAction.topSales(nextUrl));
    setPageTopItem(pageTopItem + 1);
  };
  const prevPageTopItems = (previousUrl) => {
    dispatch(topSalesAction.topSales(previousUrl));
    setPageTopItem(pageTopItem - 1);
  };
  const currentPageTopItems = (currentIndex) => {
    setPageTopItem(currentIndex);
    dispatch(
      topSalesAction.topSales(
        apiConfig.root +
          apiConfig.item +
          `?offset=${10 * currentIndex}&limit=10`
      )
    );
  };

  const nextPageTreding = (nextUrl) => {
    dispatch(topViewedItemsAction.topViewedItems(nextUrl));
    setPageTreding(pageTreding + 1);
  };
  const prevPageTreding = (previousUrl) => {
    dispatch(topViewedItemsAction.topViewedItems(previousUrl));
    setPageTreding(pageTreding - 1);
  };
  const currentPageTreding = (currentIndex) => {
    setPageTreding(currentIndex);
    dispatch(
      topViewedItemsAction.topViewedItems(
        apiConfig.root +
          apiConfig.item +
          `?offset=${10 * currentIndex}&limit=10`
      )
    );
  };

  const nextPagePopular = (nextUrl) => {
    dispatch(popularThisWeekAction.popularThisWeek(nextUrl));
    setPagePopular(pagePopular + 1);
  };
  const prevPagePopular = (previousUrl) => {
    dispatch(popularThisWeekAction.popularThisWeek(previousUrl));
    setPagePopular(pagePopular - 1);
  };
  const currentPagePopular = (currentIndex) => {
    setPagePopular(currentIndex);
    dispatch(
      popularThisWeekAction.popularThisWeek(
        apiConfig.root + apiConfig.item + `?offset=${2 * currentIndex}&limit=2`
      )
    );
  };

  return (
    <>
      <CarouselSlider />

      {categoryPayload.loading ? (
        <Loader />
      ) : (
        <CategoryGrid title="Categories" data={categoryPayload.payload} />
      )}
      {newItems.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Latest Items"
          data={newItems.payload}
          nextPage={nextPage}
          prevPage={prevPage}
          number_in_page={10}
          count={newItems.count}
          nextUrl={newItems.nextUrl}
          previousUrl={newItems.previousUrl}
          page={page}
          currentPage={currentPage}
        />
      )}
      <AddWithImage data={getRandomItem(premiumItems.payload)} />

      <HeightGap background={colors.white} height="5px" />
      {topSales.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Top sales"
          data={topSales.payload}
          nextPage={nextPageTopItems}
          prevPage={prevPageTopItems}
          number_in_page={10}
          count={topSales.count}
          nextUrl={topSales.nextUrl}
          previousUrl={topSales.previousUrl}
          page={pageTopItem}
          currentPage={currentPageTopItems}
        />
      )}
      <AddWithImage data={getRandomItem(premiumItems.payload)} />

      {topViewedItems.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Top viewed Items"
          data={topViewedItems.payload}
          nextPage={nextPageTreding}
          prevPage={prevPageTreding}
          number_in_page={8}
          count={topViewedItems.count}
          nextUrl={topViewedItems.nextUrl}
          previousUrl={topViewedItems.previousUrl}
          page={pageTreding}
          currentPage={currentPageTreding}
        />
      )}

      {popularThisWeek.loading ? (
        <Loader />
      ) : (
        <PopularThisWeek
          title="Popular this week"
          data={popularThisWeek.payload}
          nextPage={nextPagePopular}
          prevPage={prevPagePopular}
          number_in_page={2}
          count={popularThisWeek.count}
          nextUrl={popularThisWeek.nextUrl}
          previousUrl={popularThisWeek.previousUrl}
          page={pagePopular}
          currentPage={currentPagePopular}
        />
      )}
    </>
  );
};

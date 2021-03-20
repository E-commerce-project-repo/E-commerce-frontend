import { useState, useEffect } from "react";
import {
  productData,
  productDataTwo,
} from "../../components/CategoryGrid/data";
import { Slider } from "../../components/Slider/Slide";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { CategoryGrid } from "../../components/CategoryGrid/CategoryGrid";
import Feature from "../../components/Cards/Feature/index";
import { PopularThisWeek } from "../../components/popularWeeks/CardBuilder";
import { Loader } from "../../components/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { colors, config, apiConfig } from "../../constants/constants";
import * as categoryAction from "../../store/category";
import * as itemAction from "../../store/item/item";
import * as tredingNowAction from "../../store/item/tredingNow";
import * as topSalesAction from "../../store/item/topSales";
import * as popularThisWeekAction from "../../store/item/popularThisWeek";
import { HeightGap, WidthGap } from "../../globalStyles";

export const Home = () => {
  const categoryPayload = useSelector((state) => state.category);
  const newItems = useSelector((state) => state.item);
  const topSales = useSelector((state) => state.topSales);
  const tredingNow = useSelector((state) => state.tredingNow);
  const popularThisWeek = useSelector((state) => state.popularThisWeek);
  var [page, SetIsActive] = useState(0);
  var [pageTreding, setPageTreding] = useState(0);
  var [pagePopular, setPagePopular] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryAction.category());
    dispatch(itemAction.list());
    dispatch(tredingNowAction.tredingNow());
    dispatch(topSalesAction.topSales());
    dispatch(popularThisWeekAction.popularThisWeek());
  }, []);

  console.log(popularThisWeek.count);

  const nextPage = (nextUrl) => {
    dispatch(topSalesAction.topSales(nextUrl));
    SetIsActive(page + 1);
  };
  const prevPage = (previousUrl) => {
    dispatch(topSalesAction.topSales(previousUrl));
    SetIsActive(page - 1);
  };
  const currentPage = (currentIndex) => {
    SetIsActive(currentIndex);
    dispatch(
      topSalesAction.topSales(
        apiConfig.root +
          apiConfig.item +
          `?offset=${10 * currentIndex}&limit=10`
      )
    );
  };

  const nextPageTreding = (nextUrl) => {
    dispatch(tredingNowAction.tredingNow(nextUrl));
    setPageTreding(pageTreding + 1);
  };
  const prevPageTreding = (previousUrl) => {
    dispatch(tredingNowAction.tredingNow(previousUrl));
    setPageTreding(pageTreding - 1);
  };
  const currentPageTreding = (currentIndex) => {
    setPageTreding(currentIndex);
    dispatch(
      tredingNowAction.tredingNow(
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
      <Slider data={productData} />
      {categoryPayload.loading ? (
        <Loader />
      ) : (
        <CategoryGrid title="Categories" data={categoryPayload.payload} />
      )}
      <HeightGap background={colors.white} height="5px" />
      {topSales.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Top sales"
          data={topSales.payload}
          nextPage={nextPage}
          prevPage={prevPage}
          number_in_page={10}
          count={topSales.count}
          nextUrl={topSales.nextUrl}
          previousUrl={topSales.previousUrl}
          page={page}
          currentPage={currentPage}
        />
      )}
      <Feature />
      <Loader />

      {tredingNow.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Treding now"
          data={tredingNow.payload}
          nextPage={nextPageTreding}
          prevPage={prevPageTreding}
          number_in_page={8}
          count={tredingNow.count}
          nextUrl={tredingNow.nextUrl}
          previousUrl={tredingNow.previousUrl}
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

import React, { useState, useEffect } from "react";
import {
  productData,
  productDataTwo,
} from "../../components/CategoryGrid/data";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { PopularThisWeek } from "../../components/popularWeeks/CardBuilder";
import { Loader } from "../../components/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { colors, config, apiConfig } from "../../constants/constants";
import * as categoryAction from "../../store/category";
import * as itemAction from "../../store/item/item";
import * as tredingNowAction from "../../store/item/tredingNow";
import * as topSalesAction from "../../store/item/topSales";
import * as popularThisWeekAction from "../../store/item/popularThisWeek";
import * as sharedItemByUserAction from "../../store/item/sharedItemByUser";
import * as premiumItemAction from "../../store/item/premiumItem";
import { HeightGap, WidthGap } from "../../globalStyles";
import { SellerInfo } from "../../components/seller/Seller";
import { Redirect } from "react-router";

export const Seller = (props) => {
  const popularThisWeek = useSelector((state) => state.popularThisWeek);
  const sharedItemsByUser = useSelector((state) => state.sharedItemByUser);
  var [pagePopular, setPagePopular] = useState(0);
  var [pageSharedItem, setSharedItem] = useState(0);

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
        apiConfig.root +
          apiConfig.item +
          `?offset=${10 * currentIndex}&limit=10`
      )
    );
  };

  const nextPageSharedItem = (nextUrl) => {
    dispatch(sharedItemByUserAction.sharedItemByUser(nextUrl));
    setSharedItem(pageSharedItem + 1);
  };
  const prevPageSharedItem = (previousUrl) => {
    dispatch(sharedItemByUserAction.sharedItemByUser(previousUrl));
    setSharedItem(pageSharedItem - 1);
  };
  const currentPageSharedItem = (currentIndex) => {
    setSharedItem(currentIndex);
    dispatch(
      sharedItemByUserAction.sharedItemByUser(
        apiConfig.root +
          apiConfig.item +
          `?offset=${10 * currentIndex}&limit=10`
      )
    );
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sharedItemByUserAction.sharedItemByUser());
    dispatch(
      popularThisWeekAction.popularThisWeek(
        apiConfig.root + apiConfig.item + "?limit=10"
      )
    );
  }, []);
  const locationData = props.location?.data;

  if (!locationData) {
    return <Redirect to={config.home} />;
  }
  return (
    <>
      <SellerInfo data={locationData} />
      {sharedItemsByUser.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Shared Item this User"
          data={sharedItemsByUser.payload}
          nextPage={nextPageSharedItem}
          prevPage={prevPageSharedItem}
          number_in_page={10}
          count={sharedItemsByUser.count}
          nextUrl={sharedItemsByUser.nextUrl}
          previousUrl={sharedItemsByUser.previousUrl}
          page={pageSharedItem}
          currentPage={currentPageSharedItem}
        />
      )}
      {popularThisWeek.loading ? (
        <Loader />
      ) : (
        <ItemGrid
          title="Popular this week"
          data={popularThisWeek.payload}
          nextPage={nextPagePopular}
          prevPage={prevPagePopular}
          number_in_page={10}
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

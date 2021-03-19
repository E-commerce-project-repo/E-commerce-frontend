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
import { colors, config } from "../../constants/constants";
import * as categoryAction from "../../store/category";
import * as itemAction from "../../store/item";
import { HeightGap, WidthGap } from "../../globalStyles";

export const Home = () => {
  const categoryPayload = useSelector((state) => state.category);
  const topSales = useSelector((state) => state.item);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryAction.category());
    dispatch(itemAction.list());
  }, []);

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
        <ItemGrid title="Top sales" data={topSales.payload} />
      )}
      <Feature />
      <Loader />

      {topSales.loading ? (
        <Loader />
      ) : (
        <ItemGrid title="Treding now" data={topSales.payload} />
      )}

      <PopularThisWeek title="Popular this week" data={topSales.payload} />
    </>
  );
};

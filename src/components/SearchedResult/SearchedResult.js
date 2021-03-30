import { useState, useEffect } from "react";
import { ItemGrid } from "../ItemGrid/ItemGrid";
import { useDispatch, useSelector } from "react-redux";
import { apiConfig } from "../../constants/constants";
import { Loader } from "../Loader/Loader";
import * as searchItemAction from "../../store/item/search";
export const SearchResult = (props) => {
  const searchKey = props.location?.searchKey;
  const category = props.location?.category;
  const [page, setPage] = useState(0);
  const searchItems = useSelector((state) => state.searchItems);

  const dispatch = useDispatch();

  const nextPage = (nextUrl) => {
    dispatch(searchItemAction.searchItems(nextUrl));
    setPage(page + 1);
  };
  const prevPage = (previousUrl) => {
    dispatch(searchItemAction.searchItems(previousUrl));
    setPage(page - 1);
  };
  const currentPage = (currentIndex) => {};

  return searchItems.loading ? (
    <Loader />
  ) : searchItems.payload ? (
    <ItemGrid
      title={searchKey}
      data={searchItems?.payload}
      nextPage={nextPage}
      prevPage={prevPage}
      number_in_page={8}
      count={searchItems?.count}
      nextUrl={searchItems?.nextUrl}
      previousUrl={searchItems?.previousUrl}
      page={page}
      currentPage={currentPage}
    />
  ) : null;
};

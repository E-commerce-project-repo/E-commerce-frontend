import { useState, useEffect } from "react";

import { productData, productDataTwo } from "../CategoryGrid/data";
import Search from "../SearchComponent/Search";
import { SideBody } from "../SideBodyBar/SideBody";
import {
  ItemContainer,
  SideCategoryHolder,
  SideBodyCategory,
} from "./Shop.element";
import {
  ProductsContainer,
  ProductWrapper,
  Pagination,
  PaginationLink,
  PaginationContainer,
  RightPaginationArrow,
  LeftPaginationArrow,
  ExpandArrow,
} from "./Shop.element";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import * as categoryItemsAction from "../../store/item/categoryItems";
import { useDispatch, useSelector } from "react-redux";
import { apiConfig } from "../../constants/constants";
import { Loader } from "../../components/Loader/Loader";
import * as categoryAction from "../../store/category";

export const Shop = (props) => {
  const category = props.location?.data;
  const [page, setPage] = useState(0);
  const categoryItems = useSelector((state) => state.categoryItems);
  const categoryPayload = useSelector((state) => state.category);
  const [showCategory, setShowCategory] = useState(false);
  console.log(categoryPayload);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryItemsAction.categoryItems());
    dispatch(categoryAction.category());
  }, []);

  const nextPage = (nextUrl) => {
    dispatch(categoryItemsAction.categoryItems(nextUrl));
    setPage(page + 1);
  };
  const prevPage = (previousUrl) => {
    dispatch(categoryItemsAction.categoryItems(previousUrl));
    setPage(page - 1);
  };
  const currentPage = (currentIndex) => {
    setPage(currentIndex);

    dispatch(
      categoryItemsAction.categoryItems(
        apiConfig.root + apiConfig.item + `?offset=${8 * currentIndex}&limit=8`
      )
    );
  };
  const changeCategory = (item) => {
    dispatch(categoryItemsAction.categoryItems());
  };

  return (
    <ItemContainer>
      <SideBody
        showCategory={showCategory}
        setShowCategory={setShowCategory}
        data={categoryPayload.payload}
        changeCategory={changeCategory}
      />
      <ProductsContainer>
        <ExpandArrow
          onClick={() => {
            setShowCategory(!showCategory);
          }}
        />

        {categoryItems.loading ? (
          <Loader />
        ) : (
          <ItemGrid
            title="Computers"
            data={categoryItems.payload}
            nextPage={nextPage}
            prevPage={prevPage}
            number_in_page={8}
            count={categoryItems.count}
            nextUrl={categoryItems.nextUrl}
            previousUrl={categoryItems.previousUrl}
            page={page}
            currentPage={currentPage}
          />
        )}
      </ProductsContainer>
    </ItemContainer>
  );
};

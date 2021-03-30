import React, { useState, useEffect } from "react";
import {
  SearchBoxContainer,
  SearchBox,
  SearchIcon,
  SearchDevider,
  CategoryWrap,
  CategoryLabel,
  CategoryIcon,
  CategoryContainer,
  SearchIconLink,
} from "./Search.elements";
import { categories } from "./Api/Api";
import { HidedCategory } from "../HidedCategory/HidedCategory";
import { config } from "../../constants/constants";
import * as searchItemAction from "../../store/item/search";
import { useDispatch, useSelector } from "react-redux";
import { apiConfig } from "../../constants/constants";
export const Autocomplete = (props) => {
  const [filteredData, setFilteredData] = useState(categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchItems = useSelector((state) => state.searchItems);
  const dispatch = useDispatch();

  const categoryLabel = (label) => {
    setCategory(label);
    props.categoryLabel(label);
    setShowCategory(false);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
    dispatch(
      searchItemAction.searchItems(
        apiConfig.root +
          apiConfig.item +
          `?category_name=${category}&search=${e.target.value}&limit=8`
      )
    );
  };
  useEffect(() => {
    searchItemAction.searchItems(
      apiConfig.root + apiConfig.item + `?limit=810`
    );
  });
  return (
    <SearchBoxContainer
      onMouseLeave={() => setShowSearch(false)}
      onMouseEnter={() => setShowSearch(true)}
    >
      <SearchIconLink to={config.searchedResult}>
        <SearchIcon />
      </SearchIconLink>

      <SearchBox
        type="text"
        onChange={onChange}
        value={userInput}
        placeholder="Search..."
        onFocus={() => setShowSearch(true)}
      />
      <CategoryContainer
        onClick={() => {
          setShowCategory(!showCategory);
        }}
        onMouseEnter={() => setShowCategory(!showCategory)}
      >
        <CategoryLabel>{props.CategoryLabel}</CategoryLabel>
        <CategoryIcon />
      </CategoryContainer>
      <HidedCategory
        showCategory={showCategory}
        categoryLabel={categoryLabel}
      />
    </SearchBoxContainer>
  );
};

export default Autocomplete;

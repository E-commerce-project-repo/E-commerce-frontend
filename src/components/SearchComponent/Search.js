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
} from "./Search.elements";
import { categories } from "./Api/Api";
import { ItemList } from "./ItemList/ItemList";
import { CategoryList } from "./SelectedCategory/SelectedCategory";
import { HidedCategory } from "../HidedCategory/HidedCategory";

export const Autocomplete = (props) => {
  const [filteredData, setFilteredData] = useState(categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showCategory, setShowCategory] = useState(false);

  const onSelect = (item, selected) => {
    if (selected) {
      setSelectedCategories((selectedCategories) => [
        ...selectedCategories,
        item,
      ]);
    } else {
      const newArray = selectedCategories.filter((i) => {
        return i.id !== item.id;
      });
      setSelectedCategories(newArray);
    }
  };
  const deleteCategory = (item) => {
    setSelectedCategories(item);
  };
  const categoryLabel = (label) => {
    props.categoryLabel(label);
    setShowCategory(false);
  };

  const onKeyFocus = (e) => {};

  const onChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value.length === 0) {
    } else {
    }
    const filteredData = categories.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    console.log(filteredData);
    setFilteredData(filteredData);
  };

  return (
    <SearchBoxContainer onMouseLeave={() => setShowCategory(false)}>
      <SearchIcon />

      <SearchBox
        type="text"
        onChange={onChange}
        onFocus={() => onKeyFocus()}
        value={userInput}
        placeholder="Search..."
      />
      <SearchDevider />
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

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

  const categoryLabel = (label) => {
    props.categoryLabel(label);
    setShowCategory(false);
  };

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
    <SearchBoxContainer>
      <SearchIcon />

      <SearchBox
        type="text"
        onChange={onChange}
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

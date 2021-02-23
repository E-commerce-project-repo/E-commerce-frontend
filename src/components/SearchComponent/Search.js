import React, { useState, useEffect } from "react";
import {
  SearchBoxContainer,
  SearchBox,
  SearchIcon,
  CloseIcon,
  ResultSetContainer,
} from "./Search.elements";
import { categories } from "./Api/Api";
import { ItemList } from "./ItemList/ItemList";
import { CategoryList } from "./SelectedCategory/SelectedCategory";
export const Autocomplete = (props) => {
  const [filteredData, setFilteredData] = useState(categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [focused, setFocused] = useState(false);
  const [userInput, setUserInput] = useState("");

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

  const onKeyFocus = (e) => {
    setFocused(true);
  };
  const closeSearchResult = (e) => {
    setFocused(false);
    setUserInput("");
    setFilteredData(categories);
  };
  const onChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value.length === 0) {
      setFocused(false);
    } else {
      setFocused(true);
    }
    const filteredData = categories.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    console.log(filteredData);
    setFilteredData(filteredData);
  };

  return (
    <SearchBoxContainer>
      <SearchBox
        type="text"
        onChange={onChange}
        onFocus={() => onKeyFocus()}
        value={userInput}
        placeholder="Search here ..."
      />
      {focused ? (
        <CloseIcon onClick={() => closeSearchResult()} />
      ) : (
        <SearchIcon onClick={() => setFocused(true)} />
      )}
    </SearchBoxContainer>
  );
};

export default Autocomplete;

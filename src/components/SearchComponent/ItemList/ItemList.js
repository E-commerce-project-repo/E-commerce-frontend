import React, { useState } from "react";
import { ResultItem, IndexIcon, Label, CheckedIcon } from "./ItemList.elements";
export const ItemList = (props) => {
  const [selected, setSelected] = useState(false);
  const handleClicked = () => {
    props.handleSelect(props, !selected);

    setSelected(!selected);
  };
  return (
    <ResultItem onClick={handleClicked}>
      <IndexIcon>
        {selected || props.isSelected ? (
          <CheckedIcon className="step-icon">
            <svg
              width="1.5rem"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 3.5L4.5 7.5L12 1" stroke="white" strokeWidth="1.5" />
            </svg>
          </CheckedIcon>
        ) : (
          props.index
        )}
      </IndexIcon>
      <Label>{props.name}</Label>
    </ResultItem>
  );
};

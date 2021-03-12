import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckboxContainer, CheckboxIcon } from "./Checkbox.elements";

export const CheckBox = () => {
  const [checked, setCheck] = useState(false);
  return (
    <CheckboxContainer onClick={() => setCheck(!checked)} checked={checked}>
      {checked ? <CheckboxIcon /> : null}
    </CheckboxContainer>
  );
};

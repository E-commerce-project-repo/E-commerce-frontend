import { useState } from "react";
import { AddItem } from "../../components/Item/Add";

export const AddItem = () => {
  const [page, SetIsActive] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  return <AddItem />;
};

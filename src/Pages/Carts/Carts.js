import React, { useState, useEffect } from "react";
import * as MyCartsAction from "../../store/getCarts";
import * as delCartsAction from "../../store/carts/deleteCarts";
import { MyCarts } from "../../components/ShopingCart/Cart";
import { useDispatch, useSelector } from "react-redux";

export const Carts = () => {
  useEffect(() => {
    dispatch(MyCartsAction.getCarts());
  }, []);
  const getCarts = useSelector((state) => state.getCarts);
  const deleteCarts = useSelector((state) => state.deleteCarts);
  const [carts, setCarts] = useState(getCarts.payload);

  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(delCartsAction.remove({ item: id }));
  };
  return <MyCarts data={carts} removeCart={removeCart} />;
};

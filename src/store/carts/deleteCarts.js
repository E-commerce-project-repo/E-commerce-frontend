import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiConfig } from "../../constants/constants";
import { api } from "../api/api";
import { browserGet } from "../localStore";

const slice = createSlice({
  name: "carts",
  initialState: {
    payload: [],
    loading: false,
    errors: [],
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    success: (state, action) => {
      state.payload = action.payload;
      state.loading = false;
      toast.success("You item removed from cart");
    },
    error: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      Object.keys(action.payload).forEach((key) => {
        if (Array.isArray(action.payload[key])) {
          toast.error(action.payload[key][0]);
        } else {
          toast.error(action.payload[key]);
        }
      });
    },
  },
});
export default slice.reducer;
const { loading, success, error } = slice.actions;

export const remove = (data) => async (dispatch) => {
  let user = browserGet();
  dispatch(loading(true));

  const headers = {
    Authorization: `Token ${user.token}`,
    "Content-Type": "application/json",
  };

  try {
    const res = await api.delete(
      apiConfig.root + apiConfig.removeCarts + "/" + data.item,
      headers
    );
    dispatch(loading(true));
    dispatch(success(res.data));
  } catch (e) {
    if (e.body) {
      return dispatch(error(e.body?.errors));
    }
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

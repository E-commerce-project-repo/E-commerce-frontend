import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../constants/constants";
import { api } from "./api/api";
import { toast } from "react-toastify";
import { browserGet } from "./localStore";

const slice = createSlice({
  name: "getCarts",
  initialState: {
    payload: [],
    loading: false,
    errors: [],
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
      state.loading = true;
    },
    success: (state, action) => {
      state.payload = action.payload.results;
      state.loading = false;
    },
    error: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      Object.keys(action.payload).forEach((key) => {
        toast.error(action.payload[key]);
      });
    },
  },
});
export default slice.reducer;
const { loading, success, error } = slice.actions;

export const getCarts = () => async (dispatch) => {
  dispatch(loading(true));
  console.log(browserGet().token);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${browserGet().token}`,
  };
  console.log(headers);
  try {
    const res = await api.get(
      apiConfig.root + apiConfig.getCarts + "?limit=10000",
      headers
    );

    dispatch(success(res.data));
  } catch (e) {
    if (e.body) {
      return dispatch(error(e.body?.errors));
    }
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

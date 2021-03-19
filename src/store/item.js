import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../constants/constants";
import { api } from "./api/api";
import { browserStore } from "./localStore";
const slice = createSlice({
  name: "signup",
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
    },
    error: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});
export default slice.reducer;
const { loading, success, error } = slice.actions;

export const add = (data) => async (dispatch) => {
  dispatch(loading(true));
  const headers = {
    "Content-Type":
      "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbT",
  };

  try {
    const res = await api.post(apiConfig.root + apiConfig.item, headers, data);
  } catch (e) {
    if (e.body) {
      return dispatch(error(e.body?.errors));
    }
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

export const list = () => async (dispatch) => {
  dispatch(loading(true));
  const headers = {};
  try {
    const res = await api.get(apiConfig.root + apiConfig.item, headers);
    dispatch(loading(false));
    dispatch(success(res));
  } catch (e) {
    dispatch(loading(false));
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../constants/constants";
import { api } from "../api/api";
const slice = createSlice({
  name: "signup",
  initialState: {
    payload: [],
    loading: false,
    errors: [],
    count: 0,
    nextUrl: "",
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    success: (state, action) => {
      state.payload = action.payload.results;
      state.loading = false;
      state.count = action.payload.count;
      state.nextUrl = action.payload.next;
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

export const list = (_url) => async (dispatch) => {
  dispatch(loading(true));
  const headers = {};
  const url = _url ? _url : apiConfig.root + apiConfig.item + "?limit=10";
  try {
    const res = await api.get(url, headers);
    dispatch(loading(false));
    dispatch(success(res));
  } catch (e) {
    dispatch(loading(false));
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

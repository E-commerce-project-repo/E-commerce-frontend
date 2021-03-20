import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../constants/constants";
import { api } from "../api/api";
const slice = createSlice({
  name: "tredingItem",
  initialState: {
    payload: [],
    loading: false,
    errors: [],
    count: 0,
    nextUrl: "",
    previousUrl: "",
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

export const tredingNow = (_url) => async (dispatch) => {
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

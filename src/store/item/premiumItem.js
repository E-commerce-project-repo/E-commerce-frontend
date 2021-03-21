import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../constants/constants";
import { api } from "../api/api";
const slice = createSlice({
  name: "premiumItems",
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
      state.payload = action.payload.results;
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

export const premiumItems = (_url) => async (dispatch) => {
  dispatch(loading(true));
  const headers = {};
  const url = _url ? _url : apiConfig.root + apiConfig.item;
  try {
    const res = await api.get(url, headers);

    dispatch(loading(false));
    dispatch(success(res));
  } catch (e) {
    dispatch(loading(false));
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

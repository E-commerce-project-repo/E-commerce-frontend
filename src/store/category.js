import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../constants/constants";
import { api } from "./api/api";
const slice = createSlice({
  name: "category",
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
    },
  },
});
export default slice.reducer;
const { loading, success, error } = slice.actions;

export const category = () => async (dispatch) => {
  dispatch(loading(true));
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const res = await api.get(
      apiConfig.root + apiConfig.category + "?limit=10000",
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

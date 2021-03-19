import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../constants/constants";
import { api } from "./api/api";
const slice = createSlice({
  name: "category",
  initialState: {
    payload: null,
    loading: false,
    errors: [],
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
      state.loading = true;
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

export const category = () => async (dispatch) => {
  dispatch(loading(true));
  const headers = {};
  try {
    const res = await api.get(apiConfig.root + apiConfig.category, headers);

    dispatch(success(res));
  } catch (e) {
    if (e.body) {
      return dispatch(error(e.body?.errors));
    }
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

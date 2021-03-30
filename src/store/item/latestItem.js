import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../constants/constants";
import { api } from "../api/api";
import { browserGet } from "../localStore";
import { toast } from "react-toastify";

const slice = createSlice({
  name: "latest_item",
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
      Object.keys(action.payload).forEach((key) => {
        toast.error(action.payload[key]);
      });
    },
  },
});
export default slice.reducer;
const { loading, success, error } = slice.actions;

export const list = (_url) => async (dispatch) => {
  dispatch(loading(true));
  const headers = {};
  const url = _url ? _url : apiConfig.root + apiConfig.item + "?limit=10";
  try {
    const res = await api.get(url, headers);
    dispatch(loading(false));
    dispatch(success(res.data));
  } catch (e) {
    dispatch(loading(false));
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

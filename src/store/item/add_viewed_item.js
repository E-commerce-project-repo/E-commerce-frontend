import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../constants/constants";
import { api } from "../api/api";
import { browserGet } from "../localStore";
import { toast } from "react-toastify";

const slice = createSlice({
  name: "add_viewed",
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
      toast.success("Your product");
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

export const add = (data) => async (dispatch) => {
  dispatch(loading(true));

  let user = browserGet();

  const headers = {
    Accept: "application/json",
    "Content-Type":
      "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbT",
    Authorization: `Token ${user.token}`,
  };

  try {
    const res = await api.post(apiConfig.root + apiConfig.item, headers, {
      id: data.id,
    });
    dispatch(loading(false));
    dispatch(success(res.data));
  } catch (e) {
    if (e.body) {
      return dispatch(error(e.body?.errors));
    }
    return dispatch(error({ detail: "There is something went wrong" }));
  }
};

import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../constants/constants";
import { api } from "./api/api";
import { browserStore } from "./localStore";
const slice = createSlice({
  name: "signup",
  initialState: {
    user: null,
    loading: false,
    errors: [],
    _success: false,
  },
  reducers: {
    signUpLoading: (state, action) => {
      state.loading = action.payload;
      state._success = false;
    },
    signUpSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state._success = true;
    },
    signUpError: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      state._success = false;
    },
  },
});
export default slice.reducer;
const { signUpLoading, signUpSuccess, signUpError } = slice.actions;

export const signUp = (data) => async (dispatch) => {
  dispatch(signUpLoading(true));
  const headers = {
    "Content-Type":
      "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbT",
  };

  try {
    const res = await api.post(
      apiConfig.root + apiConfig.signUp,
      headers,
      data
    );
    browserStore(res);

    dispatch(signUpSuccess(res));
  } catch (e) {
    if (e.body) {
      return dispatch(signUpError(e.body?.errors));
    }
    return dispatch(signUpError({ detail: "There is something went wrong" }));
  }
};

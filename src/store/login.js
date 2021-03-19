import { createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../constants/constants";
import { api } from "./api/api";
import { browserClear, browserStore, isCleared } from "./localStore";
const slice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    errors: [],
    success: isCleared() ? false : true,
  },
  reducers: {
    loginLoading: (state, action) => {
      state.loading = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    },
    loginError: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      state.success = false;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      state.success = false;
      browserClear();
    },
  },
});
export default slice.reducer;
const { loginLoading, loginError, loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ email, password }) => async (dispatch) => {
  dispatch(loginLoading(true));
  const headers = {};

  try {
    const res = await api.post(apiConfig.root + apiConfig.signIn, headers, {
      email,
      password,
    });
    browserStore(res);
    dispatch(loginSuccess(res));
  } catch (e) {
    if (e.body) {
      return dispatch(loginError(e.body?.errors));
    }

    return dispatch(loginError({ detail: "There is something went wrong" }));
  }
};
export const logout = () => async (dispatch) => {
  try {
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

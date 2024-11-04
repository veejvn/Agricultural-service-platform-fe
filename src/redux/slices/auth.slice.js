import { createSlice } from "@reduxjs/toolkit";
import { getLS } from "@tools/localStorage.tool";

const authSlice = createSlice({
  name: "auth",
  initialState: getLS("auth", {
    tokens: { accessToken: "", refeshToken: "" },
    user: null,
    isLoging: false,
    redirect: "/",
  }),
  reducers: {
    setTokens: (state, { payload }) => {
      state.tokens.accessToken = payload.accessToken;
      state.tokens.refeshToken = payload.refeshToken;
    },
    setAccessToken: (state, { payload }) => {
      state.tokens.accessToken = payload;
    },
    clearToken: (state) => {
      state.tokens = { accessToken: "", refeshToken: "" };
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setIsLogin: (state, { payload }) => {
      state.isLoging = payload;
    },
    setRedirect: (state, { payload }) => {
      state.redirect = payload;
    },
  },
});

export const {
  setTokens,
  setAccessToken,
  clearToken,
  setUser,
  clearUser,
  setIsLogin,
  setRedirect,
} = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alert: [],
  },
  reducers: {
    setNotification: (state, { payload }) => {
      state.alert.push(payload);
    },

    removeNotification: (state, { payload }) => {
      state.alert = state.alert.filter((el) => el.id !== payload);
    },
  },
});

export const { setNotification, removeNotification } = alertSlice.actions;

export default alertSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import alertReducer from './Store'

export default configureStore({
    reducer: {
      alert: alertReducer,
    },
  })
  
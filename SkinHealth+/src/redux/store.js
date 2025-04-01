import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import consultReducer from "./consultSlice"; 

const store = configureStore({
  reducer: {
    user: userReducer,
    consult: consultReducer,
  }
});

export default store;

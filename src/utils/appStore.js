import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEmail from "./userEmailSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    usersEmail:userEmail
  },
});

export default appStore;

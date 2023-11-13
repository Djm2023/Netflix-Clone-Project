import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEmail from "./userEmailSlice";
import userSignIn from "./userSliceSignIn";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    usersEmail: userEmail,
    signin: userSignIn,
  },
});

export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userEmail from "./userEmailSlice";
import userSignIn from "./userSliceSignIn";
import movieReducer from "./movieSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    usersEmail: userEmail,
    signin: userSignIn,
    movies:movieReducer
  },
});

export default appStore;

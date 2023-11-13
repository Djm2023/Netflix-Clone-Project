import { createSlice } from "@reduxjs/toolkit";

const isToggled = createSlice({
  name: "signin",
  initialState: false,
  reducers: {
    toggleSignIn:(state,action) => {
        // console.log(state);
        // console.log(action)
        // console.log(action.payload);
        return state = !state
    },
    removeSignIn:(state) => {
        return null;
    }
  },
});

export const { toggleSignIn,removeSignIn } = isToggled.actions;
export default isToggled.reducer;

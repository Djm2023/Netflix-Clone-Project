import { createSlice } from "@reduxjs/toolkit";

const userEmailSlice = createSlice({
  name: "usersEmail",
  initialState: null,
  reducers: {
    addUserEmail: (state, action) => {
        return action.payload;
    },
    removeUserEmail: (state) => {
        return null;
    },
  },
});

export const { addUserEmail, removeUserEmail } = userEmailSlice.actions;
export default userEmailSlice.reducer;

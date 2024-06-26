// src/store/reducers/Bai8Reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  pass: string;
}

const initialState: User = {
  email: '',
  pass: '',
};

const Bai8Reducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
  },
});

export const { saveUser } = Bai8Reducer.actions;
export default Bai8Reducer.reducer;

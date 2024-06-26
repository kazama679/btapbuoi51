import { createSlice } from "@reduxjs/toolkit";

const Bai5Reducer = createSlice({
    name: "bai5",
    initialState: {
        status: true
    },
    reducers: {
        changeBai5: (state) => {
            state.status = !state.status;
        }
    }
});

export const { changeBai5 } = Bai5Reducer.actions;
export default Bai5Reducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const countReducer=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        // bên trong reducers sẽ chứa các action
        increase:(state:any)=>{
            state.count+=1
        },
        decrease:(state:any)=>{
            state.count-=1
        },
        reset:(state:any)=>{
            state.count=0
        }
    }
})
//xuất ra các action bằng cách dùng destructoring
export const {increase, decrease, reset} = countReducer.actions;
// xuất ra hàm reducer
export default countReducer.reducer;
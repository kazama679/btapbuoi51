import { createSlice } from "@reduxjs/toolkit";

const Bai2Reducer=createSlice({
    name:"array",
    initialState:{
        arr:[]
    },
    reducers:{
        addNumber:(state:any)=>{
            console.log(111111111111111,state.arr);
            state.arr.push(Math.floor(Math.random()*99999999));
            console.log(111111111111111,state);
        }
    }
})
//xuất ra các action bằng cách dùng destructoring
export const {addNumber} = Bai2Reducer.actions;
// xuất ra hàm reducer
export default Bai2Reducer.reducer;
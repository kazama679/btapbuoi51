import { createSlice } from "@reduxjs/toolkit";

const Bai3Reducer=createSlice({
    name:"background",
    initialState:{
        color: "white"
    },
    reducers:{
        changeColor:(state:any)=>{
            if(state.color==="white"){
                state.color="black"
            }else{
                state.color="white"
            }
            console.log(state.color);
        }
    }
})
export const {changeColor} = Bai3Reducer.actions;
export default Bai3Reducer.reducer;
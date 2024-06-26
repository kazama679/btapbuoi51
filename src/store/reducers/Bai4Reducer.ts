import { createSlice } from "@reduxjs/toolkit";

const Bai4Reducer=createSlice({
    name:"bai4",
    initialState:{
        mode: "flex"
    },
    reducers:{
        changeMode:(state:any)=>{
            if(state.mode==="flex"){
                state.mode="block"
            }else{
                state.mode="flex"
            }
            console.log(state.color);
        }
    }
})
export const {changeMode} = Bai4Reducer.actions;
export default Bai4Reducer.reducer;
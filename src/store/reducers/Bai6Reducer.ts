import { createSlice } from "@reduxjs/toolkit";

const Bai6Reducer=createSlice({
    name:"background",
    initialState:{
        text: true
    },
    reducers:{
        changeText:(state:any)=>{
            if(state.text){
                state.text=false
            }else{
                state.text=true
            }
            console.log(state.text);
        }
    }
})
export const {changeText} = Bai6Reducer.actions;
export default Bai6Reducer.reducer;
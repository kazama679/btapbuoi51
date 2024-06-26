import { createSlice } from "@reduxjs/toolkit";

const todolistReducer = createSlice({
    name: "todolistReducer",
    initialState:{
        jobs:[
            {
                id:1,
                name:"học lập trình",
                status:false
            },
            {
                id:2,
                name:"học lập trình2",
                status:false
            },{
                id:3,
                name:"học lập trình3",
                status:false
            }
        ]
    },
    reducers:{
        addTodo:(state,action:any)=>{
            state.jobs.push(action.payload)
        }
    }
})
// xuất ra các action
// dùng destructoring
export const {addTodo}= todolistReducer.actions
export default todolistReducer.reducer;
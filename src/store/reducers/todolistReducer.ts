import { createSlice } from "@reduxjs/toolkit";

const todolistReducer = createSlice({
    name: "todolistReducer",
    initialState:{
        jobs:[
            {
                id:1,
                name:"học lập trình"
            },
            {
                id:2,
                name:"học lập trình2"
            },{
                id:3,
                name:"học lập trình3"
            }
        ]
    },
    reducers:{
        addTodo:(state,action:any)=>{
            state.jobs.push(action.payload)
        },
        deleteJob:(state,action)=>{
            state.jobs= state.jobs.filter((item:any)=>{
                return item.id!==action.payload
            })
        },
        updateJob:(state,action)=>{
            const index = state.jobs.findIndex(item=> item.id===action.payload.id);
            state.jobs.splice(index,1, action.payload);
        },
    }
})
// xuất ra các action
// dùng destructoring
export const {addTodo}= todolistReducer.actions
export const {deleteJob}= todolistReducer.actions
export const {updateJob}= todolistReducer.actions
// xuất ra hàm redecer
export default todolistReducer.reducer;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,deleteJob, updateJob} from '../store/reducers/todolistReducer'
export default function Todolist() {
  const data: any = useSelector(state => state)
  const dispatch=useDispatch();
  console.log(2222222222222222,data);
  const AddToJob=()=>{
    const newJob:any={
      id:Math.floor(Math.random()*9999999),
      name:"code redux-toolkit"
    }
    dispatch(addTodo(newJob));
  }

  const DeleteToJob=(id:number)=>{
    dispatch(deleteJob(id));
  }
  const UpdateToJob=(job:any)=>{
    const newJob={...job,name:"ĐÃ thay đổi"}
    dispatch(updateJob(newJob));
  }
  return (
    <>
      <label htmlFor="">Thêm tên công việc</label>
      <input type="text" />
      <button onClick={AddToJob}>Thêm</button>
      
      <ul>
        {data.todolistReducer.jobs.map((job: any) => {
          return <li key={job.id}>{job.id} {job.name} <button onClick={()=>DeleteToJob(job.id)}>Xóa</button> <button onClick={()=>UpdateToJob(job)}>Cập nhập</button></li>
        })}
      </ul>
    </>
  )
}

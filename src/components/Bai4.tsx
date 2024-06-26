import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/reducers/Bai3Reducer';
import { changeMode } from '../store/reducers/Bai4Reducer';

export default function Bai3() {
    const dispatch=useDispatch();
    const data:any= useSelector(state=>state);
    const handleMode=()=>{
      dispatch(changeMode())
    }
  return (
    <>
    <div style={{display:`${data.Bai4Reducer.mode}`, justifyContent:"space-around"}}>
      <div style={{background:"red"}}>1</div>
      <div style={{background:"red"}}>2</div>
      <div style={{background:"red"}}>3</div>
      <div style={{background:"red"}}>4</div>
    </div>
    <button onClick={handleMode}>Change mode</button>
    </>
  )
}
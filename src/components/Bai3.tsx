import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/reducers/Bai3Reducer';

export default function Bai3() {
    const [color,setColor]=useState<boolean>(false);
    const dispatch=useDispatch();
    const data:any= useSelector(state=>state);
    console.log('bai3',data);
    const handleBackground=()=>{
        setColor(!color);
        dispatch(changeColor())
    }
  return (
    <div style={{background:`${data.Bai3Reducer.color}`, width:"50px", height:"50px"}}>
        <button onClick={handleBackground}>{!color ? "Light" : "Dark"}</button>
    </div>
  )
}
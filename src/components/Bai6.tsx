import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../store/reducers/Bai6Reducer';

export default function Bai3() {
    const dispatch=useDispatch();
    const data:any= useSelector(state=>state);
    const changeNgonNgu=()=>{
      dispatch(changeText());
    }
  return (
    <div>
      <select onChange={changeNgonNgu} name="" id="">
        <option value="Vietnamise">Vietnamise</option>
        <option value="English">English</option>
      </select>
      <p>{data.Bai6Reducer.text ? "Học viện Rikkei" : "Academy Rikkei"}</p>
    </div>
  )
}
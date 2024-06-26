import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/reducers/Bai3Reducer';

export default function Bai3() {
    const dispatch=useDispatch();
    const data:any= useSelector(state=>state);
  return (
    <div>

    </div>
  )
}
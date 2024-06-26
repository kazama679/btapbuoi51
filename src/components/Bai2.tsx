import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from '../store/reducers/Bai2Reducer';
export default function Bai2() {
    const dispatch=useDispatch();
    const data:any= useSelector(state=>state);
    console.log('hiiiiiiiiiiiiii',data);
    const handleClick=()=>{
        dispatch(addNumber())
        console.log('suuuuuuuuuuuu');
    }
  return (
    <div>
      List number: [{data.Bai2Reducer.arr.map((item)=>{
        return item + ", "
      })}]
      <button onClick={handleClick}>Random number</button>
    </div>
  )
}

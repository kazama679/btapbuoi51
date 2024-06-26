import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../store/reducers/Bai8Reducer';

export default function Bai8() {
    const dispatch=useDispatch();
    const data:any= useSelector(state=>state);
    const [loginStatus,setLoginStatus]=useState<boolean>(false)
    const [email,setEmail]=useState<string>('');
    const [pass,setPass]=useState<string>('');
    const changeEmail=(e: React.ChangeEvent<HTMLInputElement>)=>{
      console.log(e.target.value);
      setEmail(e.target.value);
    }
    const changePassword=(e: React.ChangeEvent<HTMLInputElement>)=>{
      console.log(e.target.value);
      setPass(e.target.value);
    }
    const saveThongTin=()=>{
      dispatch(saveUser({email,pass}));
      setLoginStatus(true)
    }
    const inLogin=()=>{
      setLoginStatus(false)
    }
  return (
    <>
    {
      !loginStatus ? <div>LOGIN FORM
      <div></div>
      <label htmlFor="">Email</label>
      <input type="text" onChange={changeEmail}/>
      
      <label htmlFor="">Password</label>
      <input type="text" onChange={changePassword}/>
      <button onClick={saveThongTin}>Đăng nhập</button>
    </div>
      :
      <>
        <div>User Name: {data.Bai8Reducer.email}</div>
        <div>Email: {data.Bai8Reducer.pass}</div>
        <button onClick={inLogin}>Đăng xuất</button>
      </>
    }
    </>
  )
}
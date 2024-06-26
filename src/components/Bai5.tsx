import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBai5 } from '../store/reducers/Bai5Reducer';

export default function Bai3() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.Bai5Reducer);

    const handleStatus = () => {
        dispatch(changeBai5());
    }

    return (
        <div>
            <div style={{display: "flex", alignItems: "center" }}>
                <i className="fa-solid fa-gauge"></i>
                <p style={{display: data.status ? "flex" : "none"}}>Bảng điều khiển</p>
            </div>
            <div style={{display: "flex", alignItems: "center" }}>
                <i className="fa-solid fa-user"></i>
                <p style={{display: data.status ? "flex" : "none"}}>Tài khoản</p>
            </div>
            <div style={{display: "flex", alignItems: "center" }}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <p style={{display: data.status ? "flex" : "none"}}>Tài sản</p>
            </div>
            <div style={{display: "flex", alignItems: "center" }}>
                <i className="fa-solid fa-square-poll-vertical"></i>
                <p style={{display: data.status ? "flex" : "none"}}>Thống kê</p>
            </div>
            <div style={{display: "flex", alignItems: "center" }}>
                <i className="fa-solid fa-file"></i>
                <p style={{display: data.status ? "flex" : "none"}}>Tài liệu</p>
            </div>
            <div style={{display: "flex", alignItems: "center" }}>
                {data.status ? (
                    <i onClick={handleStatus} className="fa-solid fa-arrow-left"></i>
                ) : (
                    <i onClick={handleStatus} className="fa-solid fa-arrow-right"></i>
                )}
                <p style={{display: data.status ? "flex" : "none"}}>Thu gọn</p>
            </div>
        </div>
    )
}

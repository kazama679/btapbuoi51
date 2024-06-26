import countReducer from "./reducers/countReducer";
import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./reducers/todolistReducer";
import Bai2Reducer from "./reducers/Bai2Reducer";
import Bai3Reducer from "./reducers/Bai3Reducer";
import Bai4Reducer from "./reducers/Bai4Reducer";
import Bai5Reducer from "./reducers/Bai5Reducer";
import Bai6Reducer from "./reducers/Bai6Reducer";
import Bai7Reducer from "./reducers/Bai7Reducer";
import Bai8Reducer from "./reducers/Bai8Reducer";

const store = configureStore({
    reducer:{
        countReducer,
        todolistReducer,
        Bai2Reducer,
        Bai3Reducer,
        Bai4Reducer,
        Bai5Reducer,
        Bai6Reducer,
        Bai7Reducer,
        Bai8Reducer
    }
})
export default store;
import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducer/authReducer";
import taskReducer from "./reducer/taskReducer";


export const server_uri = 'http://localhost:9000'
const store = configureStore({
    reducer:{
        taskReducer,
        authReducer
    }
})

export default store;

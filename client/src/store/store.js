import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducer/authReducer";
import taskReducer from "./reducer/taskReducer";


export const server_uri = 'https://trello-server-1.onrender.com'
const store = configureStore({
    reducer:{
        taskReducer,
        authReducer
    }
    
})

export default store;
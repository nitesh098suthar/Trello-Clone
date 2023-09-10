import { authInstance } from "./authAction";        

export const addAction = (title, description, category) => async(dispatch) => {

    try {
        dispatch({type: "addingReq"})
        const {data} = await authInstance.post("/task/add", {title, description, category})
        dispatch({type: "addingRes", payload : data})
    } catch (error) {
        dispatch({type: "addingRej", payload : error.response.data.error})
        
    }  
}
export const updateAction = (title, description, id) => async(dispatch) => {

    try {
        dispatch({type: "updateReq"})
        const {data} = await authInstance.put("/task/update/" + id , {title, description})
        dispatch({type: "updateRes", payload : data})
    } catch (error) {
        dispatch({type: "updateRej", payload : error.response.data.error})
        
    }
}
export const dndAction = (category, id) => async(dispatch) => {

    try {
        dispatch({type: "dndReq"})
        const {data} = await authInstance.put("/task/dnd/" + id , {category})
        dispatch({type: "dndRes", payload : data})
    } catch (error) {
        dispatch({type: "dndRej", payload : error.response.data.error})
        
    }
}
export const deleteAction = (id) => async(dispatch) => {

    try {
        dispatch({type: "deleteReq"})
        const {data} = await authInstance.delete("/task/delete/" + id)
        dispatch({type: "deleteRes", payload : data})
    } catch (error) {
        dispatch({type: "deleteRej", payload : error.response.data.error})
        
    }
}
export const getAllTaskAction = () => async(dispatch) => {

    try {
        dispatch({type: "getAllTaskReq"})
        const {data} = await authInstance.get("/task/get")
        dispatch({type: "getAllTaskRes", payload : data})
    } catch (error) {
        dispatch({type: "getAllTaskRej", payload : error.response.data.error})
        
    }
}
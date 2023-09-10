import React, {useState} from 'react'
import { getAllTaskAction, updateAction } from '../../store/action/taskAction'
import { useDispatch } from 'react-redux'

const Popup = ({id, setEdit}) => {
    const dispatch = useDispatch();
    const [val, setVal] = useState({title: "", description:""})

    const inputHandler = (e) =>{
        setVal({...val, [e.target.name]: e.target.value})
    }
    
    const submitHandler = async() => {
        await dispatch(updateAction(val.title, val.description, id))

       await dispatch(getAllTaskAction())
       setEdit(false)
    }

  return (
    <>
      <div className='bg-slate-200 rounded-xl grid place-items-center'> 
        
        <div>
        <br />
        <label htmlFor="title" className="text-xl font-bold">Title</label>
        <input type="text" className="bg-slate-100 w-full my-2 p-3 rounded-md" name="title" value={val.title} onChange={inputHandler}/>
        <br />
        <label htmlFor="description" className="text-xl font-bold">Description</label>
        <input type="text" className="bg-slate-100 w-full my-2 p-3 rounded-md" name="description" value={val.description} onChange={inputHandler}/>
        <br />
        <input type="button" value="save" onClick={submitHandler} className="cursor-pointer bg-slate-800 font-bold text-white p-2 center w-full rounded-md mt-4 hover:opacity-95 " />
        </div>
      </div>
    </>
  )
}

export default Popup

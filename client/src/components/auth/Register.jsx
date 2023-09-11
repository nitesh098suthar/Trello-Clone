import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/action/authAction";
import { useNavigate } from "react-router-dom";



function Login({isAuth}) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const nav = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = () =>{

    dispatch(loginAction(user.email, user.password))
    nav("/task")
  }

  return (
    <>
    <div className="p-6 min-h-[400px] grid place-items-center bg-yellow-400">
      <form method="post" className="w-[300px] h-[240px] bg-white rounded-xl shadow-lg" >
       <div className="p-8">
       <label htmlFor="email" className="text-xl font-bold">Email</label>
       <br />
        <input
          name="email"
          type="email"
          placeholder="eg: address@service.tld"
          value={user.email}
          onChange={inputHandler}
          className="bg-slate-100 w-full my-2 p-3 rounded-md"
        />
        <br />
        <label htmlFor="password" className="text-xl font-bold">Password</label>
       <br />

        <input
          name="password"
          type="password"
          placeholder="Strong Password"
          value={user.password}
          onChange={inputHandler}
          className="bg-slate-100 w-full my-2 p-3 rounded-md"
        />
        <br />
        <input type="button" id="btn" value="Login" onClick={submitHandler} className="cursor-pointer bg-slate-800 font-bold text-white p-2 center w-full rounded-md mt-4 hover:opacity-95 "/>
       </div>
      </form>
    </div>
    </>
  );
}

export default Login;

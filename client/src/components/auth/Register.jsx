import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../store/action/authAction";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandler = async() =>{
    await dispatch(signUpAction(user.name, user.email, user.password))
    nav("/task")
    
  }
  return (
    <div  className="p-6 min-h-[400px] grid place-items-center bg-yellow-400">
      <form method="post"  className="w-[300px] h-[300px] bg-white rounded-xl shadow-lg">
        <div className="p-8">
        <label htmlFor="name" className="text-xl font-bold">Name</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="eg: John Doe"
          id="text"
          value={user.name}
          onChange={inputHandler}
          className="bg-slate-100 w-full my-2 p-3 rounded-md"

        />
        <br />

        <label htmlFor="email" className="text-xl font-bold">Email</label>
        <br />

        <input
          name="email"
          type="email"
          placeholder="eg: address@service.tld"
          id="email"
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
          id="password"
          value={user.password}
          onChange={inputHandler}
          className="bg-slate-100 w-full my-2 p-3 rounded-md"

        />
        <br />

        <input type="button" id="btn" value="SignUp" onClick={submitHandler} className="cursor-pointer bg-slate-800 font-bold text-white p-2 center w-full rounded-md mt-4 hover:opacity-95 " />
        </div>
      </form>
    </div>
  );
}

export default Register;

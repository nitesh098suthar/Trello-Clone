import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logoutAction } from "../../store/action/authAction";

const Header = ({ user, name, isAuth }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(logoutAction());
    nav("/");
  };
  return (
    <>
      <div className="bg-slate-50 w-screen px-6 py-2 shadow-lg border-b-[1px] border-slate-200">
        {isAuth ? (
          <>
            <h2>Hello, {name}</h2>
            <Link to="/task">Task</Link>
          </>
        ) : (
          <>
           <div className="flex items-center justify-between">
           <div className="flex items-center text-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12 "
             
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <h3 className="font-bold ml-3 text-4xl ">Trello</h3>
          </div>
           <div className="p-4 ">
           <Link to="/register" className="mr-3 text-lg">Register</Link>
            <Link to="/login" className="text-lg">Login</Link>
           </div>

           </div>
          </>
        )}
        {isAuth && <Link onClick={submitHandler}>Logout</Link>}
      </div>
    </>
  );
};

export default Header;

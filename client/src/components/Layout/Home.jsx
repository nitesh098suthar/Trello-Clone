import React from "react";
import Task from "../tasks/Task";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="p-6 min-h-[400px] grid place-items-center bg-yellow-400">
        <div className="grid place-items-center">
        <h1 className="text-4xl font-bold text-center ">Welcome to the TRELLO!!</h1>
        <p className="text-center mt-4 text-black">
          Trello is a versatile, web-based project management tool that utilizes
          boards, lists, and cards to help users organize tasks and collaborate
          efficiently, making it popular for both personal and professional use.
        </p>
        <Link to="/task" element={<Task />} className="mt-3 bg-slate-800 text-white rounded-lg p-3 tracking-wide font-bold text-center ">SHOW TASK</Link>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Login from "../auth/Login";
import App from "../../App";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-white w-screen ">
        <div className="flex justify-between p-6 items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12"
             
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <h3 className="font-bold ml-3 text-4xl">Trello</h3>
          </div>
          <div className="text-lg text-white" >
            <Link to="/" element={<App />}>
              Home
            </Link>
          </div>
        </div>
        <hr className="opacity-40" />
        <div className="p-6">
          <h4 className="font-bold">About Trello</h4>
          <p>What's behind the boards</p>
        </div>
        <hr className="opacity-40"  />

        <div className="p-6">
          <h4 className="font-bold">Jobs</h4>
          <p>Learn about open roles on the Trello team</p>
        </div>
        <hr className="opacity-40"  />

        <div className="p-6">
          <h4 className="font-bold">Apps</h4>
          <p>Download the Trello app for your Desktop and Mobile devices</p>
        </div>
        <hr className="opacity-40"  />

        <div className="p-6">
          <h4 className="font-bold">Contact Us</h4>
          <p>Need anything? Get in touch and we can help</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

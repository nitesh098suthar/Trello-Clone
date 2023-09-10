import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register.jsx";
import Task from "./components/tasks/Task.jsx";
import NotFound from "./components/Layout/NotFound";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { getUserAction } from "./store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import Protected from "./components/Protected";
import Home from "./components/Layout/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const { User } = useSelector((state) => state.authReducer);
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  return (
    <>
      <Router>
        <Header user={User} name={User?.name} isAuth={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/task"
            element={
              <Protected isAuth={isAuthenticated}>
                <Task />
              </Protected>
            }
          />

          <Route
            path="/login"
            element={
              <Protected isAuth={!isAuthenticated}> 
                <Login />
              </Protected>
            }
          />

          <Route
            path="/register"
            element={
              <Protected isAuth={!isAuthenticated}>
                <Register />
              </Protected>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

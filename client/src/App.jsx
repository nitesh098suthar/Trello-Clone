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
import Home from "./components/Layout/Home";
import Spinner from "./components/Layout/Spinner";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const { User } = useSelector((state) => state.authReducer);
  const { isAuthenticated, loading } = useSelector(
    (state) => state.authReducer
  );

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Router>
        <Header user={User} isAuth={isAuthenticated} loading={loading} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/task"
            element={isAuthenticated ? <Task /> : <Register />}
          />

          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <NotFound />}
          />

          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <NotFound />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

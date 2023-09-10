import {createReducer} from "@reduxjs/toolkit";

const initialValue = {};

const authReducer = createReducer(initialValue, {
  //login
  loginReq: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  loginRes: (state, action) => {
    state.loading = false;
    //apn ne jo "payload : data" liya tha vo action.paylaod.message me liya hai. or state.message me message store kar diya hai!!
    state.message = action.payload.message;
    //ab ye state.message authReducer me aa gya
    //example : authReducer: {
    // message : "login successfully"
    state.isAuthenticated = true;
  },
  loginRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  //signup
  signUpReq: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  signUpRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.isAuthenticated = true;
  },
  signUpRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  //logOut
  logOutReq: (state) => {
    state.loading = true;
  },
  logOutRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.isAuthenticated = false;
    state.User = null;
  },
  logOutRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //forgetPass
  forgetPassReq: (state) => {
    state.loading = true;
  },
  forgetPassRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  forgetPassRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //resetPass
  resetPassReq: (state) => {
    state.loading = true;
  },
  resetPassRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  resetPassRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //changePass
  changePassReq: (state) => {
    state.loading = true;
  },
  changePassRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  changePassRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  getUserReq : (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  getUserRes : (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.User = action.payload.User;
  },
  getUserRej : (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },

  clearMessage : (state) => {
    state.message = null;
  },
  clearError : (state) => {
    state.error = null;
  }
});

export default authReducer;

import {createReducer} from "@reduxjs/toolkit";

const initialValue = {};

const taskReducer = createReducer(initialValue, {
  //adding
  addingReq: (state) => {
    state.loading = true;
  },
  addingRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  addingRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //update
  updateReq: (state) => {
    state.loading = true;
  },
  updateRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  updateRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //delete
  deleteReq: (state) => {
    state.loading = true;
  },
  deleteRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  deleteRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //dnd
  dndReq: (state) => {
    state.loading = true;
  },
  dndRes: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  dndRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //getAllTask
  getAllTaskReq: (state) => {
    state.loading = true;
  },
  getAllTaskRes: (state, action) => {
    state.loading = false;
    state.tasks = action.payload.tasks;
  },
  getAllTaskRej: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

 
});

export default taskReducer;

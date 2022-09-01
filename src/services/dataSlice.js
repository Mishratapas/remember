import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  fname: localStorage.getItem("fname")
    ? JSON.parse(localStorage.getItem("fname"))
    : "",
  lname: localStorage.getItem("lname")
    ? JSON.parse(localStorage.getItem("lname"))
    : "",
  email: localStorage.getItem("email")
    ? JSON.parse(localStorage.getItem("email"))
    : "",
  phone: localStorage.getItem("phone")
    ? JSON.parse(localStorage.getItem("phone"))
    : "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getFname: (state, action) => {
      state.fname = action.payload;
      localStorage.setItem("fname", JSON.stringify(state.fname));
    },
    getLname: (state, action) => {
      state.lname = action.payload;
      localStorage.setItem("lname", JSON.stringify(state.lname));
    },
    getEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", JSON.stringify(state.email));
    },
    getPhone: (state, action) => {
      state.phone = action.payload;
      localStorage.setItem("phone", JSON.stringify(state.phone));
    },
    signout: (state, action) => {
      state.fname = "";
      state.lname = "";
      state.email = "";
      state.phone = "";
      localStorage.setItem("fname", JSON.stringify(state.fname));
      localStorage.setItem("lname", JSON.stringify(state.lname));
      localStorage.setItem("email", JSON.stringify(state.email));
      localStorage.setItem("phone", JSON.stringify(state.phone));
    },
  },
});

export const {getFname, getLname, getEmail, getPhone, signout} =
  dataSlice.actions;
export default dataSlice.reducer;

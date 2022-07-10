import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async function () {
    const response = await axios.get('http://23.88.43.148/users')
    return response.data;
  })

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async function (newUser) {
    const response = await axios.post('http://23.88.43.148/users', newUser)
    return response.data;
  })

export const editUser = createAsyncThunk(
  'users/editUser',
  async function (user) {
    const response = await axios.put(`http://23.88.43.148/user/${user.user_id}`, user)
    return response.data;
  })

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async function (id) {
    const response = await axios.delete(`http://23.88.43.148/user/${id}`)
    return response.data
  })

const appSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    newUser: {},
    selectUser: {},
    status: null,
    error: null,
    newRender: false,
    currentPage: 1,
    usersPepPage: 5,
    firstShowUser: 0,
    lastShowUser: 5,
  },
  reducers: {
    setSelectUser(state, action) {
      state.selectUser = action.payload;
    },
    setRender(state, action) {
      state.newRender = action.payload;
    },
    setActivePage(state, action) {
      state.currentPage = action.payload
      state.lastShowUser = state.currentPage * state.usersPepPage
      state.firstShowUser = state.lastShowUser - state.usersPepPage
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.users = action.payload
    },
    [getUsers.rejected]: (state, action) => {
      state.error = 'error'
    },
    [addNewUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.newRender = true
    },
    [addNewUser.rejected]: (state, action) => {
      state.error = 'error'
    },
    [deleteUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.newRender = true
    },
    [deleteUser.rejected]: (state, action) => {
      state.error = 'error'
    },
    [editUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null
    },
    [editUser.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.newRender = true
    },
    [editUser.rejected]: (state, action) => {
      state.error = 'error'
    }
  },
})

export const { setRender, setSelectUser, setActivePage } = appSlice.actions;
export default appSlice.reducer;
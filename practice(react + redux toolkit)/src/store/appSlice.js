import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTools = createAsyncThunk(
    'app/getTools',
    async function() {
        const response = await axios.get('https://craftly.free.beeceptor.com/tools')
        return response.data.tools;
    }
)

export const getBlogs = createAsyncThunk(
    'app/getBlogs',
    async function() {
        const response = await axios.get('https://craftly.free.beeceptor.com/blogs')
        return response.data.blogs;
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState: {
        searchValue: '',
        tools: [],
        blogs: [],
        activeBlogs: [],
        activeTool: '',
        status: null,
        error: null
    },
    reducers: {
        changeValue(state, action) {
            state.searchValue = action.payload
        },
        filterTools(state, action) {
            state.tools = state.tools.filter(tool => tool.title.includes(action.payload));
            state.searchValue = '';
        },
        setActiveBlogs(state, action) {
            if(state.activeTool) {
                state.activeBlogs = state.blogs.filter(tool => tool.toolID === action.payload);
            } else {
                state.activeBlogs = []
            }
        },
        setActiveTool(state, action) {
            if(action.payload === state.activeTool) {
                state.activeTool = ''
            } else {
            state.activeTool = action.payload;
            state.activeBlogs = []
            }
        }
    },
    extraReducers: {
        [getTools.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [getTools.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.tools = action.payload
        },
        [getTools.rejected]: (state, action) => {
            state.error = 'error'
        },
        [getBlogs.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [getBlogs.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.blogs = action.payload
        },
        [getBlogs.rejected]: (state, action) => {
            state.error = 'error'
        }
    },
})

export const {changeValue, filterTools, setActiveBlogs, setActiveTool} = appSlice.actions;
export default appSlice.reducer;
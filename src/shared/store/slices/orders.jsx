import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from "../api/base.js"
const initialState = {
    items: [],
    isLoading: false,
    error: '',
};
export const getorders = createAsyncThunk("/overwriteMassAdmin", async ({}, {rejectWithValue}) => {
    return fetch(`${baseUrl}/overwriteMassAdmin`)
    .then(res => res.json()).catch((rej)=>rejectWithValue(rej))
  },
);

export const OrdersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: {
        [getorders.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getorders.fulfilled.type]: (state, action) => {
            console.log(action.payload.doc);
            state.isLoading = false;
            state.items = action.payload.doc;
            localStorage.setItem("orders", JSON.stringify(state.items))
        },
    }
});


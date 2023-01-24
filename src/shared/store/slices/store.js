import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {OrdersSlice} from "./orders"

const reducers = {
    OrdersSlice: OrdersSlice.reducer,
};

export const store = configureStore({
    reducer: combineReducers(reducers),
});

setupListeners(store.dispatch);

  
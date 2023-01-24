import React from 'react'
import LayOut from '../wigits/Layout';
import OrdersPage from "../pages/OrdersPage"
import ActiveCardPage from "../pages/ActiveCardPage"
import Chat from "../pages/Chat"
import CreateCard from "../pages/CreateCard"
import OrdersPageNumber from "../pages/OrdersPageNumber"

const RouterConfig = {OrdersPage: {path: "/order", element: <LayOut><OrdersPage/></LayOut>}, ActiveCardPage: {path: "/activeCard", element: <LayOut><ActiveCardPage/></LayOut>}, Chat: {path: "/chat", element: <LayOut><Chat/></LayOut>}, CreateCard: {path: "/createCard", element: <LayOut><CreateCard/></LayOut>}, OrdersPageNumber: {path: "/order/:id/:id", element: <LayOut><OrdersPageNumber/></LayOut>},}

export default RouterConfig 
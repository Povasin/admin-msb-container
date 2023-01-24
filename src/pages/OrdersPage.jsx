import React from 'react'
import { Link } from 'react-router-dom';
import "./scss/ordersPage.scss"
import {OrdersSlice, getorders} from "../shared/store/slices/orders"
import { useSelector } from 'react-redux'
import { store } from '../shared/store/slices/store';
import { useEffect } from 'react';
import OrdersCard from '../shared/componets/OrdersCard';
import { useState } from 'react';

export default function OrdersPage() {
  const orders = useSelector((state)=>state.OrdersSlice)
  function countOrders() {
    for (let i = 0; i < orders.items.length; i++) {
     const order = orders.items[i].orderMass.filter((card)=>!card.orderCollect && !card.orderAccepted && !card.orderGo && !card.orderReceived)
      return order.length
    }
  }
  useEffect(()=>{
    store.dispatch(getorders({}))
  }, [])

  return (
    <div>
      <div className='headerOrder'>
        <Link to="/createCard">создать карточку</Link>
        <Link to="/activeOrders">активные</Link>
        <Link to="/deliveryOrders">доставленные</Link>
        <Link to="/newOrders" ><img src="/bagHeader.svg" alt="корзина"/><div className="services__sum"><p>{countOrders() ?? 0}</p></div>Новые</Link>
      </div>
      <h1>Заказы</h1>
      <div className="orders">
        { orders.items != 0 ? orders?.items.map((item, index)=><OrdersCard key={index} item={item}/>) :  <div className="order__clear">
            <h2>заказов пока нет</h2>
            <p>для обнавление заказов перезагрузите сайт</p>
        </div>}
      </div>
    </div>
  )
}

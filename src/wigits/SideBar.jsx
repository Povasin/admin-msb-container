import React from 'react'
import "./scss/sideBar.scss"
import { Link, useLocation } from 'react-router-dom';
import {OrdersSlice} from "../shared/store/slices/orders"
import { useSelector } from 'react-redux'
import { store } from '../shared/store/slices/store';
export default function SideBar() {
  const location = useLocation()
  const orders = useSelector((state)=>state.OrdersSlice)

  function countOrders() {
    for (let i = 0; i < orders.items.length; i++) {
     const order = orders.items[i].orderMass.filter((card)=>!card.orderCollect && !card.orderAccepted && !card.orderGo && !card.orderReceived)
      return order.length
    }
  }

  return (
    <aside>
        <div className="logo">
            <img alt="логотип"  src="/iconPWA/logo96x96.svg"/>
            <a href="https://msb-container.ru/" className="logo">MSB<span>container</span></a>
        </div>
        <div className='pages'>
            <Link to="/order" className={`pages__page ${location.pathname.split("/")[1] == "" && "active"}`}>
              <img src="/order.svg" alt="заказы"/>
              <p>Заказы</p>
              { countOrders() != undefined && <div className='circle'><span>{countOrders()}</span></div>}
            </Link>
            <Link to="/chat"  className={`pages__page ${location.pathname.split("/")[1] == "chat" && "active"}`}>
              <img src="/chat.svg" alt="чат"/>
              <p>Чат</p>
              <div className='circle'><span>1</span></div>
            </Link>
            <Link to="/activeCard"  className={`pages__page ${location.pathname.split("/")[1] == "activeCard" && "active"}`}>
              <img src="/card.svg" alt="карточки"/>
              <p>Карточки</p>
              <div className='circle'><span>1</span></div>
            </Link>
            <Link to="/people"  className={`pages__page ${location.pathname.split("/")[1] == "activeCard" && "active"}`}>
              <img src="/people.svg" alt="карточки"/>
              <p>Сотрудники</p>
            </Link>
            <a href="https://msb-container.ru/"  className="pages__page">
              <img src="/logout.svg" alt="выйти"/>
              <p>Выйти</p>
            </a>
        </div>
    </aside>
  )
}

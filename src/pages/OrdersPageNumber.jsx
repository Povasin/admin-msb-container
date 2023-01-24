import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate, useLocation, Link,} from 'react-router-dom'
import { OrdersSlice, getorders } from '../shared/store/slices/orders';
import { store } from '../shared/store/slices/store';
import "./scss/OrdersPageNumber.scss"

export default function  OrderCardPage() {
    const orders = useSelector((state)=>state.OrdersSlice)
    const location = useLocation()
    const navigate = useNavigate()
    const user = orders?.items.find((item)=>item._id == location.pathname.split("/")[2])
    const item = user?.orderMass.find((item)=>item.number == location.pathname.split("/")[3])
    function OrderPrice() {
        let summ = 0;
        item?.mass.forEach(array=>{
            summ+= (array.count*array.data.price )*array.month 
        })
        return summ
    }
    function OrderDiscount() {
        let summ = 0;
        item?.mass.forEach(array=>{
            summ+= (array.count*array.data.discount )*array.month 
        })
        return summ
    }

    useEffect(()=>{
        store.dispatch(getorders({}))
    }, [])

    function indexEmail() {
        for ( let i = 0; i < orders.items.length; i++) { 
            if (orders.items[i].email == user.email) {
                return i;
            }
        }
    }
    function indexNumber() {
        for ( let i = 0; i < user.orderMass.length; i++) { 
            if ( user.orderMass[i].number ==  item.number) {
                return i;
            }
        }
    }
    function changeOrder(key) {
        //починить
        let newMass = orders.items.slice();
        console.log( newMass[indexEmail()].orderMass[indexNumber()][key].date);
        // newMass[indexEmail()].orderMass[indexNumber()][key].date =  `dwwd`,
        // newMass[indexEmail()].orderMass[indexNumber()][key].status = true
    }

  return (
    <div>
        <div className='headerOrderNumber'>
            <Link to="/createCard">создать карточку</Link>
            <Link to="/activeOrders">активные</Link>
            <Link to="/deliveryOrders">доставленные</Link>
            <Link to="/newOrders" ><img src="/bagHeader.svg" alt="корзина"/><div className="services__sum"><p>1</p></div>Новые</Link>
        </div>
        <div className='userHtml'>
            <h1>заказ №{item?.number}</h1>
            <div className="order">
            {item?.mass.map((array)=>
                <div key={array.id} className="bag__block">
                 <a href={`https://msb-container.ru/card/${array.id}`}><img  src={array.data.img[0].src} alt={array.data.name}/></a>  
                <div className="block__content">
                <p className="rent">Аренда</p>
                <a className="OrderName"  href={`https://msb-container.ru/card/${array.id}`}>{array.data.name}</a>
                <div className="block__inputRow">	
                    <div className="block__input">	
                        <p className="fd-col">количество: <span>{array.count}шт</span></p>		
                        <p className="fd-col">срок Аренды: <span>{array.month}мес</span></p>
                    </div>
                    <div className="block-col">
                        <p className="block__discount">{(array.count*array.data.discount)*array.month}</p>
                        <p className="block__price" name="priceOrder">{(array.count*array.data.price)*array.month}₽</p>
                    </div>
                </div>
                </div>
                </div>
            )}
            </div>
            <div className="orders__info">
            <div className="input__price">
                    <p>Итого:</p>
                    <span name="summPriceOrder" id="price">{OrderPrice()}₽</span>
            </div>                    
            <div className="input__discount">
                <p>Без скидки:</p>
                <span id="discount">{OrderDiscount()}₽</span>
            </div>
            <div className="input__delivery">
                <p className='rent'> Способ получения: </p>
                <span> {item?.delivery}</span>
                    {/* <span>{item?.date == undefined && !item?.orderReceived ? "не указано продавцом" : item?.orderReceived ? "заказ получен" : item?.date}</span> */}
                </div>
            <h2>Отслеживание заказа</h2>
            <div className="orders__track">
                <div className="orders__trackInfo">
                    <div className="orders__trackInfoCol">
                        <p>заказ принят</p>
                        <p className="date">{!item?.orderAccepted.date ? "x" : item?.orderAccepted.date}</p>
                        <div className={`borderRadius ${!item?.orderAccepted.status ? "" : "active"}`} onClick={()=>changeOrder("orderAccepted")}>{item?.orderAccepted.status && <img src="/admin/tick.svg" alt="галочка"/>}</div>
                    <div className={`border ${!item?.orderAccepted.status ? "" : "borderActive"}`}></div>
                    </div>
                    <div className="orders__trackInfoCol">
                        <p>заказ собирается</p>
                        <p className="date">{!item?.orderCollect.date ? "x" : item?.orderCollect.date}</p>
                        <div className={`borderRadius ${!item?.orderCollect.status ? "" : "active"}`}>{item?.orderCollect.status && <img src="/tick.svg" alt="галочка"/>}</div>
                        <div className={`border ${!item?.orderCollect.status ? "" : "borderActive"}`}></div>
                    </div>
                    <div className="orders__trackInfoCol">
                        <p>заказ в пути</p>
                        <p className="date">{!item?.orderGo.date ? "x" : item?.orderGo.date}</p>
                        <div className={`borderRadius ${!item?.orderGo.status ? "" : "active"}`}>{item?.orderGo.status && <img src="/tick.svg" alt="галочка"/>}</div>
                        <div className={`border ${!item?.orderGo.status ? "" : "borderActive"}`}></div>
                    </div>
                    <div className="orders__trackInfoCol">
                        <p>заказ получен</p>
                        <p className="date">{!item?.orderReceived.date ? "x" : item?.orderReceived.date}</p>
                          
                    <div className={`borderRadius ${!item?.orderReceived.status ? "" : "active"}`}>{item?.orderReceived.status && <img src="/tick.svg" alt="галочка"/>}</div>
                    </div>
                </div>
                </div>
            </div>   
                <div className="chatAndChange">
                    <button className="writeToShop">написать продавцу</button>
                    <button className="change">изменить</button>
                </div>
              
        </div>
    </div>
    
  )
}

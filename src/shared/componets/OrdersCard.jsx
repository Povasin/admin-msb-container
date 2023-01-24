import React from 'react'
import { Link } from 'react-router-dom';

export default function OrdersCard({item}) {
  console.log(item?.orderMass);
  return (
    <div>
        {item?.orderMass == 0 || !item?.orderMass ? 
        <div className="order__clear">
            <h2>заказов пока нет</h2>
            <p>для обнавление заказов перезагрузите сайт</p>
        </div> : 
        item?.orderMass.map((card, index)=>{return card.mass.map((array)=> 
        <div key={index} className="bag__block">
            <img src={array.data.img[0].src} alt={`закаказ № ${card.number}`}/>
            <div className="block__content"> 
            {!card.orderCollect && !card.orderAccepted && !card.orderGo && !card.orderReceived ? <p className="block__orderNew">новый</p> : card.orderCollect && card.orderAccepted && card.orderGo && card.orderReceived ? <p className="block__orderTrack">доставлено</p> : <p className="block__orderAccept">активен</p>}
                <p className="orderNumber">закаказ № {card.number}</p>
                <p className='rent'>Cпособ Отправки: <span>{card.delivery == "самовызов" ? `самовызов:` : "доставка"}</span></p>
                <Link className="track" to={`/order/${item._id}/${card.number}`}>{!item.orderReceived ? "отслеживать заказ" : "история заказа" }</Link>
            </div>
        </div>
        )})
        }
    </div>
  )
}

import React, { useEffect } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import "./scss/layOut.scss"

export default function LayOut(props) {
  return (
    <div className='LayOut'>
        <SideBar/>
        <div  className='LayOut__children' >
            <Header/>
            {props.children} 
        </div>
    </div>
  )
}

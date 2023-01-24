import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      }
    )
}

export default function Search() {
    const [showSearch, setShowSearch] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, ()=>setShowSearch(false))
  return (
    <div ref={ref} className="search__wrapper" >            
        <input type="text" placeholder="Поиск заказов..." maxLength="30" className="search" />
        <img src="/search.svg" alt="поиск"/>
        {/* <div className="search__block"></div> */}
    </div>
  )
}

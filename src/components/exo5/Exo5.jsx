import React from 'react'
import './Exo5.css'


export default function Exo5({focus, setFocus}) {
  return (
    <>
        <input onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} type="text" className={focus ? "vert" : ""} />
        {
            focus ?
            <span>tkt cet input sert à rien</span>
            :
            ""
        }
    </>
  )
}

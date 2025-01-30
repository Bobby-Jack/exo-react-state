import React from 'react'

export default function Exo1({counter, setCounter}) {
  function plus(){
    setCounter(counter + 1)
    
  }
  
    return (
    <button onClick={plus}>Click {counter}</button>
  )
}

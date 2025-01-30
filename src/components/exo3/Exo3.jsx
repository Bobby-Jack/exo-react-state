import React from 'react'

export default function Exo3({currentInputValue, setCurrentInputValue}) {
  return (
    <div>
        <input type="text" onChange={(e)=>{setCurrentInputValue(e.target.value)}}/>
        <button onClick={()=>{alert(currentInputValue)}}>send</button>
    </div>
  )
}

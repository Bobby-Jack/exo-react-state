import React from 'react'

export default function Exo2({textContent, setTextContent}) {
    function handleTextContent(e){
        if (e.key == "Enter") {
            setTextContent(e.target.value)
        }
    }

    return (
    <div>
        <p>textContent = {textContent}</p>
        <input  type="text"  onKeyDown={(e)=>{handleTextContent(e)}} />
    </div>
  )
}

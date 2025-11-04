import React, { useState } from 'react'
function Greeting() {

    const [message, SetMessage] = useState("hello Class");

    function changeMessage(){
        SetMessage("you clicked the button!");
    }
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  )
}

export default Greeting

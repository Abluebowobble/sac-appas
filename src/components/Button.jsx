import React from 'react'

const Button = () => {
  return (
    <div>
      <button 
      id="infobutton"
      className="font-calsans text-white bg-amber-700 rounded-full py-3 px-5 hover:shadow-lg/20 hover:bg-amber-800 transition-colors duration-20" 
      style={{ cursor: "url('/smilingduckcursor.png'), auto" }} 
      onClick={() => document.getElementById("infobutton").innerHTML = "Function not implemented... yet!   ;)"}>Click here for more information!</button>
    </div>
  )
}

export default Button

import React from 'react'

const Button = ({text, color, bgColor, size}) => {
  return (
    <button 
      type="button" 
      className={`${bgColor} text-${color} text-${size} font-medium p-3 hover:drop-shadow-xl rounded-[10px]`}
    >
      {text}
    </button>
  )
}

export default Button
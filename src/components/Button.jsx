import React from 'react'

const Button = ({text, color, bgColor, size, borderRadius}) => {
  return (
    <button 
      type="button" 
      style={{background: bgColor, color, borderRadius}}
      className={
        `text-${size} font-medium p-3 hover:drop-shadow-xl`
      }
    >
      {text}
    </button>
  )
}

export default Button
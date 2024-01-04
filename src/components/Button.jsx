import React from 'react'

const Button = ({buttonClass,style, text}) => {
  return (
    <div>
        <button className={buttonClass} style={style}>{text}</button>
    </div>
  )
}

export default Button
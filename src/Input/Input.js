import React from 'react'
import './Input.css'

function Input(props) {
    const {size = "small", children, ...rest} = props
  return (
    <input className={`input ${size}`} {...rest}/>
  )
}

export default Input
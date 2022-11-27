import React from 'react'

const Input = ({ type, className, name }) => {
  return (
    <input type={type}  className={className} name={name} id={name} placeholder={name} />
  )
}

export default Input
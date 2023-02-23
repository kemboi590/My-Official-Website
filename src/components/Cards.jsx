import React from 'react'
import './cards.css'

const Cards = ({children, className, onClick }) => {
  return (
      <article className={`card ${className}`} onClick={onClick}>
          {children}
    </article>
  )
}

export default Cards
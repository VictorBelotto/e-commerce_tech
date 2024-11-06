'use client'
import React, { useState } from 'react'

const Checkout = () => {
  const [clientSecret] = useState('')

  return (
    <div>
      {clientSecret ? (
        <p>Checkout</p>
      ) : (
        <p>Carregando...</p>
      )} 
    </div>
  )
}

export default Checkout


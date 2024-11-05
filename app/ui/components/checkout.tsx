'use client'
import { useCartStore } from '@/app/context/store'
import React, { useEffect } from 'react'


const Checkout = () => {
  const cartStore = useCartStore()
  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items : cartStore.cart,
        payment_intent_id: cartStore.paymentIntent
      }),
    })
  },[cartStore.paymentIntent, cartStore.cart])
  return (
    <div>Checkout</div>
  )
}

export default Checkout
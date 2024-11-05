'use client'
import { useCartStore } from '@/app/context/store'
import React, { useEffect, useState } from 'react'

const Checkout = () => {
  const cartStore = useCartStore()
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    }).then((res) => { return res.json() }).then((data) => {
      console.log(data)
      setClientSecret(data.paymentIntent.clientSecret)
      cartStore.setPaymentIntent(data.paymentIntent)
    })


  }, [cartStore.paymentIntent, cartStore.cart, cartStore])

  return <div>Checkout</div>
}

export default Checkout

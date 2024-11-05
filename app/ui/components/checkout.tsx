'use client'
import { useCartStore } from '@/app/context/store'
import React, { useEffect } from 'react'

const Checkout = () => {
  const cartStore = useCartStore()

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: cartStore.cart,
            payment_intent_id: cartStore.paymentIntent,
          }),
        })
        const data = await response.json()
        console.log(data.paymentIntent)
        
        if (data.paymentIntent) {
          cartStore.setPaymentIntent(data.paymentIntent)
        }
      } catch (error) {
        console.error("Erro ao criar payment intent:", error)
      }
    }

    if (cartStore.cart.length > 0) {
      createPaymentIntent()
    }
  }, [cartStore.paymentIntent, cartStore.cart, cartStore])

  return <div>Checkout</div>
}

export default Checkout

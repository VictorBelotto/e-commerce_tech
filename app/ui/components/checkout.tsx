'use client'
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements, PaymentElement } from "@stripe/react-stripe-js"
import { useCartStore } from '@/app/context/store'
import React, { useState } from 'react'
import CheckoutForm from "./checkoutForm"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const Checkout = () => {
  const { clientSecret, onCheckout } = useCartStore()

  const option: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'night',
      labels: 'floating'
    }
  }

  return (
    <div>
      {(onCheckout !== 'success' && clientSecret && onCheckout === 'checkout') && (
        <Elements options={option} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}

    </div>
  )
}

export default Checkout


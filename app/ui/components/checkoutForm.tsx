import React, { useState } from 'react'
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useCartStore } from '@/app/context/store'
import { ProductProps } from '@/app/lib/definitions'
import { formatCurrencyBRL } from '@/app/lib/utils'
import { Button } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const { cart, setCheckout, clearCart, setPaymentIntent } = useCartStore()

  const totalPrice = cart.reduce((acc, value) => {
    const price = value.price ?? 0;
    const quantity = value.quantity ?? 1;
    return acc + (price * quantity)
  }, 0)

  const formattedPrice = formatCurrencyBRL(totalPrice)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return

    setIsLoading(true)

    stripe.confirmPayment({
      elements,
      redirect: "if_required"
    }).then((result) => {
      if (!result.error) {
        setPaymentIntent('')
        clearCart()
        setCheckout("success")
      }
    })
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={{ layout: 'accordion' }} />
      <p className='py-4 text-lg text-green-500'>Total: {formattedPrice}</p>
      <Stack direction="row" gap="4" align="center">
        <Button isLoading={isLoading} className='flex gap-2 items-center justify-center w-full' colorScheme='orange' color='white' variant="solid" onClick={handleSubmit}>
          Confirmar Compra
        </Button>
      </Stack>

    </form>
  )
}

export default CheckoutForm
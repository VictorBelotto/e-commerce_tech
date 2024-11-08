'use client'
import { useCartStore } from "@/app/context/store";
import { Button, Stack } from "@chakra-ui/react";
import RemoveQuantifyIcon from "../icons/removeQuantifyIcon";
import { ProductProps } from "@/app/lib/definitions";
import AddQuantifyIcon from "../icons/addQuantifyIcon";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ButtonRemoveToCart({ id }: { id: string }) {
  const { removeFromCart } = useCartStore();
  return (
    <Button onClick={() => removeFromCart(id)} size={"sm"} color={'white'} colorScheme='red' className="mt-auto">
      Remover
    </Button>
  )
}
export function ButtomAddQuantify({ product }: { product: ProductProps }) {
  const { addToCart} = useCartStore();

  return (
    <Button onClick={()=> addToCart(product)} size={"sm"} color={'white'} colorScheme="blackAlpha" variant='ghost' className="rounded-full">
      <AddQuantifyIcon />
    </Button>)
}

export function ButtomRemoveQuantify({ id }: { id: string }) {
  const { removeQuantity } = useCartStore();
  return (
    <Button onClick={() => removeQuantity(id)} size={"sm"} color={'black'} colorScheme="blackAlpha" variant='ghost' className="rounded-full">
      <RemoveQuantifyIcon />
    </Button>
  )
}

export function ButtomBuy() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { user } = useUser()
  const useStore = useCartStore()

  const handleCheckout = async () => {
    if (!user) {
      router.push(`/sing-in?redirectUrl=/cart`)
      useStore.setCheckout('cart')
      return
    }
 

    try {
      setIsLoading(true)
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: useStore.cart, 
          payment_intent_id: useStore.paymentIntent,
          user_id: user.id
        }),
      })
      const data = await response.json()
      useStore.setPaymentIntent(data.paymentIntent.id)
      useStore.setClientSecret(data.paymentIntent?.client_secret)
      useStore.setCheckout('checkout')
    } catch (error) {
      useStore.setPaymentIntent('')
      console.error("Erro ao criar payment intent:", error)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <Stack>
      <Button isLoading={isLoading} size={"sm"} color={'white'} colorScheme="orange" variant='solid' className="rounded-full" onClick={handleCheckout}>
        Finalizar pedido
      </Button>
    </Stack >

  )
}

'use client'

import { useCartStore } from "@/app/context/store"
import { Card } from "./cart-card"

export  function CartWrapper() {
  const {cart} = useCartStore()
  
  return(
    <section className="flex flex-col gap-6">
      {cart && Array.isArray(cart) && cart.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </section>
  )
}
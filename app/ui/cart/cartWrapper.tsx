'use client'

import { useCartStore } from "@/app/context/cart-context"
import { Card } from "./cart-card"

export  function CartWrapper() {
  const data = useCartStore((state) => state.items_cart)
  
  return(
    <section className="flex flex-col gap-6">
      {data && Array.isArray(data) && data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </section>
  )
}
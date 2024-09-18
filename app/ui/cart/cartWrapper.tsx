'use client'

import { fetchCart } from "@/app/lib/actions"
import { Card } from "./cart-card"

export  function CartWrapper() {
  const data = fetchCart()
  console.log(data)
  return(
    <section className="flex flex-col gap-6">
      {data && Array.isArray(data) && data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </section>
  )
}
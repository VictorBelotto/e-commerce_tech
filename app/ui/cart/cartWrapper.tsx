'use client'

import { useCartStore } from "@/app/context/store"
import { Card } from "./cart-card"

export function CartWrapper() {
  const { cart } = useCartStore()

  return (
    <section className="flex flex-col  bg-[#303030] px-6 py-3 rounded-lg">
      {cart && Array.isArray(cart) && cart.map((product) => (
        <>
          <Card product={product} key={product.id} />
          <hr className='my-2 border-gray-700' />
        </>

      ))}
    </section>
  )
}
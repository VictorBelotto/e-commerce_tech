'use client'

import { CardItem } from "./card-item"
import { useProducts } from "@/hooks/useProducts"

export default  function CardWrapper() {
  const products = useProducts()
  
  return (
    <section className='flex flex-wrap gap-8'>
        {products.products?.map((products) => (
        <CardItem key={products.id} product={products} />
      ))}
    </section>
  )
}

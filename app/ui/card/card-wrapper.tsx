'use server'

import { fetchProducts } from "@/app/lib/data"
import { CardItem } from "./card-item"

export default async function CardWrapper() {
  const data = await fetchProducts()
  return (
    <section className='flex flex-wrap gap-8'>
        {data.map((data) => (
        <CardItem key={data.id} product={data} />
      ))}
    </section>
  )
}

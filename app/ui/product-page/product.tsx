import { fetchProductById } from '@/app/lib/data'
import React from 'react'
import { ProductProps } from '@/app/lib/definitions'

export default  async function product(id : string) {
  const product = fetchProductById(id)

  return (
    <section>
      
    </section>
  )
}


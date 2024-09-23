import Product from '@/app/ui/product-page/product'
import React, { Suspense } from 'react'

interface Props {
  params: { id: string }
}

function ProductID({ params }: Props) {
  return (
    <section >
      <Suspense fallback={<p>Carregando...</p>}>
        <Product id={params.id} />
      </Suspense>
    </section>
  )
}

export default ProductID
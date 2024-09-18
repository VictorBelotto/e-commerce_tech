import React, { Suspense } from 'react'
import { CartWrapper } from '../ui/cart/cartWrapper'

const page = () => {
  return (
    <main className='flex flex-col w-full justify-center items-center mt-8'>
      <Suspense fallback={<p>Carregando...</p>}>
        <CartWrapper />
      </Suspense>
    </main>
  )
}

export default page
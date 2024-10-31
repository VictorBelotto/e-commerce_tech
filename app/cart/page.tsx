import React, { Suspense } from 'react'
import { CartWrapper } from '../ui/cart/cartWrapper'
import Resume from '../ui/cart/resume'

const page = () => {
  return (
    <main className='flex flex-col w-full justify-center items-center mt-8'>
      <Suspense fallback={<p>Carregando...</p>}>
        <CartWrapper />
      </Suspense>
      <Resume/>
    </main>
  )
}

export default page
import React, { Suspense } from 'react'
import { CartWrapper } from '../ui/cart/cartWrapper'
import Resume from '../ui/cart/resume'

const page = () => {
  return (
    <main className='flex w-full justify-center items-center mt-8 '>
      <section className='flex w-[85%] justify-between'>
        <Suspense fallback={<p>Carregando...</p>}>
          <CartWrapper />
          <Resume />
        </Suspense>
      </section>
    </main>
  )
}

export default page
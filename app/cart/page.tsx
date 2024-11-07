import React, { Suspense } from 'react'
import { CartWrapper } from '../ui/cart/cartWrapper'
import Resume from '../ui/cart/resume'

const page = () => {
 
  return (
    <main className='flex w-full justify-center items-center mt-8 '>
      <section className='flex w-full justify-center'>
        <Suspense fallback={<p>Carregando...</p>}>
          <CartWrapper />
        </Suspense>
      </section>
    </main>
  )
}

export default page
'use client'

import { useCartStore } from "@/app/context/store"
import { Card } from "./cart-card"
import Resume from "./resume"

export function CartWrapper() {
  const { cart, onCheckout } = useCartStore()

  return (

    <main className='flex w-full max-w-[1480px] justify-between'>
      {onCheckout === 'success' ? (
        <h2 className="text-white text-center">Compra efetuada com sucesso!</h2>
      ) : (
        <>
          <section className="flex flex-col w-[70%] px-4 py-4 bg-[#303030] rounded-lg h-fit">
          <div className='flex gap-2 items-center mb-4'>
        <h4 className="text-white text-2xl">Meus Favoritos</h4>
        
      </div>
      <hr className='border-red-500 w-24 mb-4'/>
            {cart && Array.isArray(cart) && cart.map((product) => (
              <div key={product.id}>
                <Card product={product} />
                <hr className='my-2 border-gray-700' />
              </div>
            ))}
          </section>
          <Resume />
        </>
      )}
    </main>

  )
}
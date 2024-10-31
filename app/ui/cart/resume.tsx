'use client'
import { useCartStore } from '@/app/context/store'
import { formatCurrencyBRL } from '@/app/lib/utils'
import React from 'react'

const Resume = () => {
  const { cart } = useCartStore()
  if (!cart) {
    return <><h3>Sem items</h3></>
  }

  const total = cart.reduce((acc, value) => {
    const price = value.price ?? 0;
    const quantity = value.quantity ?? 1;
    return acc + (price * quantity)
  }, 0)

  const valorParcelado = (total * 0.10) + total

  return (
    <div className='flex flex-col text-white w-[350px] '>

      <div className='flex w-full justify-between'>
        <p>Valor dos produtos:</p>
        <p>{formatCurrencyBRL(total)}</p>
      </div>
      <hr className='my-1 border-gray-700' />
      <div className='flex w-full justify-between'>
        <p>Total à prazo:</p>
        <p>{formatCurrencyBRL(valorParcelado)}</p>
      </div>
      <hr className='my-2 border-gray-700' />
      <div className='flex w-full justify-between gap-2'>
        <p>Valor à vista no <b>Pix:</b></p>
        <div className='flex flex-col'>
          <p className='text-end'>{formatCurrencyBRL(total)}</p>
          <p>Economize: <b>{formatCurrencyBRL(valorParcelado - total)}</b></p>
        </div>
      </div>
      <hr className='my-2 border-gray-700' />
    </div>
  )
}

export default Resume
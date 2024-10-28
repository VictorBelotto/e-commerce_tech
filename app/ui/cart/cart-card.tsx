import React from 'react'
import Image from 'next/image'
import { ProductProps } from '@/app/lib/definitions'
import { formatCurrencyBRL } from '@/app/lib/utils'
import { ButtomRemoveQuantify, ButtonRemoveToCart, ButtomAddQuantify } from './buttons-cart'
import { ButtonAddCart } from '../components/buttons'

export const Card = ({ product }: { product: ProductProps }) => {
  const { name, price, image_url, id, quantity } = product
  const valorParcelado = price ? formatCurrencyBRL(price * 0.1 + price) : 'R$ 0,00'
  return (
    <main className='flex bg-white rounded-lg shadow-lg w-[820px] px-4 py-2'>
      {
        image_url.length > 0 ?
          (
            <Image src={image_url[0]} width={130} height={130} alt={`imagem ${image_url}`} className='object-cover' />
          ) :
          (
            <span className='w-[110px] h-[110px] bg-gray-500' />
          )
      }
      <div className='px-3 py-3 flex gap-12 items-center w-full justify-between'>
        <div className='flex-col flex h-full'>
          <a className='font-semibold w-72'>{name}</a>
          <div className='mt-auto flex flex-col'>
            <p className='text-sm'>Com desconto no PIX: {formatCurrencyBRL(price)}</p>
            <p className='text-sm max-w-72'>Parcelado no cartão de crédito em até 10x sem juros: {valorParcelado}</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between'>
          
            <p className='text-base font-semibold'>Quant.</p>

            <div className='flex  items-center justify-center'>
              <ButtomRemoveQuantify id={id} />
              <p className='font-semibold text-base'>{quantity}</p>
              <ButtomAddQuantify product={product} />

          </div>


        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-base'>Preço à vista:</p>
          <a className='font-semibold'>{formatCurrencyBRL(price)}</a>
          <ButtonRemoveToCart id={id} />

        </div>
      </div>
    </main>
  )
}

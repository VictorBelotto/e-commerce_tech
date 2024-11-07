import React from 'react'
import Image from 'next/image'
import { ProductProps } from '@/app/lib/definitions'
import { formatCurrencyBRL } from '@/app/lib/utils'
import { ButtomRemoveQuantify, ButtonRemoveToCart, ButtomAddQuantify } from './buttons-cart'
import { ButtonAddCart } from '../components/buttons'
import Link from 'next/link'

export const Card = ({ product }: { product: ProductProps }) => {
  const { name, price, image_url, id, quantity } = product
  const valorParcelado = price ? formatCurrencyBRL(price * 0.1 + price) : 'R$ 0,00'
  return (
    <main className='flex w-full py-2 px-2 text-white'>
      {
        image_url.length > 0 ?
          (
            <Image src={image_url[0]} width={128} height={128} alt={`imagem ${image_url}`} className='object-cover w-32 h-32 rounded-lg' />
          ) :
          (
            <span className='w-[110px] h-[110px] bg-gray-500' />
          )
      }
      <div className='flex w-full ml-4 items-center justify-between'>
   
          <Link href={`/product/${id}`} className='flex-col w-full max-w-[500px] flex h-full group hover:cursor-pointer'>
            <p className='w-full h-full font-semibold text-wrap line-clamp-2 truncate group-hover:text-orange-500'>{name}</p>
            <div className='mt-auto flex flex-col line text-gray-300'>
              <p className='text-sm'>Com desconto no PIX: {formatCurrencyBRL(price)}</p>
              <p className='text-sm max-w-72'>Parcelado no cartão de crédito em até 10x sem juros de: {valorParcelado}</p>
            </div>
          </Link>

        <div className='flex flex-col items-center justify-between h-full'>
          <div className='flex flex-col items-center'>
            <p className='text-sm'>Quant.</p>
            <div className='flex  items-center justify-center'>
              <ButtomRemoveQuantify id={id} />
              <p className='font-semibold text-base'>{quantity}</p>
              <ButtomAddQuantify product={product} />
            </div>
          </div>
          <ButtonRemoveToCart id={id} />
        </div>
        <div className='flex flex-col gap-2 h-full items-end'>
          <p className='text-sm'>Preço à vista no PIX:</p>
          <a className='text-lg font-semibold text-orange-500'>{formatCurrencyBRL(price)}</a>
        </div>
      </div>
    </main>
  )
}

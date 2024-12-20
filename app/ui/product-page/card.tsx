import { ProductProps } from '@/app/lib/definitions'
import React from 'react'
import Favorite from '../icons/favorite'
import { ButtonAddCart, ButtonAddFavorite } from '../components/buttons'
import { formatCurrencyBRL } from '@/app/lib/utils'
import Image from 'next/image'

const Card = ({ product }: { product: ProductProps }) => {
  const valorParcelado = ((product.price ?? 0) * 0.1) + (product.price ?? 0)
  const parcelas = (valorParcelado ?? 0) / 10
  return (
    <main className='flex flex-col w-full max-w-[1080px] gap-9 py-5  px-5 '>
      <h4 className='font-semibold'>{product.name}</h4>
      <div className='flex w-full justify-between'>
        <div className='w-[25%] overflow-hidden'>
          <Image src={product.image_url[0]} alt={`Imagem ${product.image_url[0]}`} width={500} height={500} className='w-full h-full' />
        </div>

        <div className='flex flex-col'>

          <div className='flex w-full items-center justify-between '>
            <p className='font-semibold w-fit'>Marca: {product.manufacturer}</p>
            <ButtonAddFavorite product={product}/>
          </div>
          <hr className='my-2 border-gray-700' />
          <p className='uppercase text-green-500 font-semibold'>Produto Disponível</p>
          <hr className='my-2 border-gray-700' />
          <div className='flex gap-16 mb-4'>
            <div>
              <p className='text-xs text-green-500'>à vista</p>
              <h3 className='font-bold text-green-500'>{formatCurrencyBRL(product.price)}</h3>
            </div>
            <div className='flex gap-4 items-center w-56'>
              <ButtonAddCart product={product} />
            </div>
          </div>
          <p>Á vista no PIX com até 10% <b>OFF</b></p>
          <div className='flex flex-col mt-4'>
            <p className='font-bold'>{formatCurrencyBRL(valorParcelado)}</p>
            <p>Em até {(valorParcelado / 100) > 90 ? '10x' : '1x'} de <b>{(valorParcelado / 100) > 90 ? formatCurrencyBRL(parcelas) : formatCurrencyBRL(valorParcelado)}</b> sem juros no cartão</p>
          </div>
        </div>
      </div>
    </main>)
}

export default Card
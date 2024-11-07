import { ProductProps } from '@/app/lib/definitions'
import { formatCurrencyBRL } from '@/app/lib/utils'
import Image from 'next/image'
import React from 'react'
import { ButtonAddFavorite } from './buttons-favorites'
import { ButtonAddCart } from '../components/buttons'

const FavoriteCard = ({product} : {product : ProductProps}) => {
  const { name, price, image_url, id } = product
    const valorParcelado = price ? formatCurrencyBRL(price * 0.1 + price) : 'R$ 0,00'
  return (
    <div className='flex w-full py-2 px-2 text-white'>
      <Image src={image_url[0]} width={128} height={128} alt={`imagem ${image_url}`} className='object-cover w-32 h-32 rounded-lg' />

      <div className='flex w-full ml-4 items-center justify-between'>
        <div className='flex-col w-full max-w-[650px] flex h-full'>
          <p className='w-full h-full font-semibold text-wrap text-lg line-clamp-2 truncate'>{name}</p>
          <div className='mt-auto flex flex-col gap-1 text-gray-300'>
            <p className='text-sm'>Com desconto no PIX: <b>{formatCurrencyBRL(price)}</b></p>
            <p className='text-sm max-w-72'>Parcelado no cartão de crédito em até 10x sem juros de:<b> {valorParcelado}</b></p>
          </div>
        </div>

        <div className='flex flex-col gap-2 h-full items-end justify-center'>
          <p className='text-sm'>Preço à vista no PIX:</p>
          <a className='text-lg font-semibold text-orange-500'>{formatCurrencyBRL(price)}</a>
        </div>
        <div className='flex flex-col gap-4 items-end'>
          
          <ButtonAddFavorite product={product}/>
          <ButtonAddCart product={product}/>
          </div>
      </div>
    </div>
  )
}

export default FavoriteCard
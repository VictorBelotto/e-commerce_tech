import { ProductProps } from '@/app/lib/definitions'
import { formatCurrencyBRL } from '@/app/lib/utils'
import Image from 'next/image'
import React from 'react'
import { ButtonAddFavorite } from './buttons-favorites'

const FavoriteCard = ({product} : {product : ProductProps}) => {
  const { name, price, image_url, id } = product
  return (
    <div className='flex w-full py-2 px-2 text-white'>
      <Image src={image_url[0]} width={128} height={128} alt={`imagem ${image_url}`} className='object-cover w-32 h-32 rounded-lg' />

      <div className='flex w-full ml-4 items-center justify-between'>
        <div className='flex-col w-full max-w-[500px] flex h-full'>
          <p className='w-full h-full font-semibold text-wrap line-clamp-2 truncate'>{name}</p>
          <div className='mt-auto flex flex-col line text-gray-300'>
            <p className='text-sm'>Com desconto no PIX: {formatCurrencyBRL(price)}</p>
          </div>
        </div>

        <div className='flex flex-col gap-2 h-full items-end'>
          <div className='flex gap-4'>
          
          <ButtonAddFavorite product={product}/>
          </div>
          <p className='text-sm'>Preço à vista no PIX:</p>
          <a className='text-lg font-semibold text-orange-500'>{formatCurrencyBRL(price)}</a>
        </div>
      </div>
    </div>
  )
}

export default FavoriteCard
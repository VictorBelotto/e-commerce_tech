import React from 'react'
import { products } from '@/app/lib/initial-products'
import Image from 'next/image'
import { ProductProps } from '@/app/lib/definitions'
import { ButtonRemoveToCart } from '../card/buttons'

export const Card = ({product} : {product : ProductProps}) => {
  const { name, price, image_url, id, stock } = product
  const images = JSON.parse(image_url)
  const thumbnail = images.find((image: string) => image.includes('thumbnail'))
  return (
    <section className='flex bg-white rounded-lg shadow-lg w-fit px-4 py-2'>
      {
        thumbnail ?
          (
            <Image src={thumbnail} width={110} height={110} alt={`imagem `} />
          ) :
          (
            <span className='w-[110px] h-[110px] bg-gray-500' />
          )
      }
      <div className='px-3 py-6 flex gap-12'>
        <div className='flex'>
          <a className='font-semibold w-80'>{name}</a>
        </div>
        <div className='flex flex-col items-center '>
          <p className='text-base'>quant.</p>
          <p className='font-semibold text-base'>{`< 1 >`}</p>
          <ButtonRemoveToCart id={id} />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-base'>Preço à vista:</p>
          <a className='font-semibold'>{`R$ ${price}`}</a>
        </div>
      </div>
    </section>
  )
}

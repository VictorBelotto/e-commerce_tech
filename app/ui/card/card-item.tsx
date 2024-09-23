

import React from 'react'
import Image from 'next/image'
import { ProductProps } from '@/app/lib/definitions'
import { ButtonAddCart, ButtonBuy } from './buttons'
import { formatCurrencyBRL } from '@/app/lib/utils'
import Link from 'next/link'


export function CardItem({ product }: { product: ProductProps }) {
  const { name, id, price, image_url, technicalInfo } = product
  const images = JSON.parse(image_url)
  const thumbnail = images.find((image: string) => image.includes('thumbnail'))

  return (
    <section className='rounded-lg flex flex-col py-2 px-3 shadow-lg h-[508px] justify-between bg-white cursor-pointer' id={id} >
      <Link href={`product/${id}`}>
        <div>
          {Array.isArray(images) ? (
            <Image priority src={thumbnail} alt={`Imagem ${thumbnail}`} width={288} height={288} />
          ) : (
            <div className='w-72 h-48 bg-slate-700 rounded-lg'></div>
          )}

        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <p className='w-72 font-bold h-14 overflow-hidden break-words'>{name}</p>
          <p className='font-semibold text-xl'>
            {formatCurrencyBRL(price)}
          </p>
        </div>
        <div>
          <div className='flex gap-4 items-center mt-auto'>
            <ButtonBuy product={product} />
            <ButtonAddCart product={product} />
          </div>
        </div>
      </Link>
    </section>
  )
}
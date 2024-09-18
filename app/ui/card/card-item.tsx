
import React, { Suspense } from 'react'
import {fetchProducts, fetchProductsByTag } from '@/app/lib/data'
import Image from 'next/image'
import { ProductProps } from '@/app/lib/definitions'
import { ButtonAddCart, ButtonBuy } from './buttons'


export function CardItem({ product }: { product: ProductProps }) {
  const { name, id, price, image_url } = product
  const images = JSON.parse(image_url)
  const thumbnail = images.find((image: string) => image.includes('thumbnail'))

  return (
    <section className='rounded-lg flex flex-col py-2 px-3 shadow-lg h-[508px] justify-between bg-white cursor-pointer' id={id} >
      <div>
        {Array.isArray(images) ? (
          <Image priority src={thumbnail} alt={`Imagem ${thumbnail}`} width={288} height={288} />
        ) : (
          <div className='w-72 h-48 bg-slate-700 rounded-lg'></div>
        )}

      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <p className='w-72 font-bold h-14 overflow-hidden break-words'>{id}</p>
        <p className='font-semibold text-xl'>
          {`R$ ${price}`}
        </p>
      </div>
      <div>
         <div className='flex gap-4 items-center mt-auto'>
          <ButtonBuy product={product}/>
          <ButtonAddCart product={product}/>
        </div>
      </div>
    </section>
  )
}

export default async function cardWrapper() {
  const data = await fetchProducts()
  return (
    <section className='flex flex-wrap gap-8'>
      {data.map((data) => (
        <CardItem key={data.id} product={data} />
      ))}
    </section>
  )
}

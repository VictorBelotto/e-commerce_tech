import { fetchProductById } from '@/app/lib/data'
import React from 'react'
import { ProductProps } from '@/app/lib/definitions'
import Favorite from '../icons/favorite'
import Image from 'next/image'
import { formatCurrencyBRL } from '@/app/lib/utils'
import { ButtonAddCart } from '../card/buttons'

export default async function Product({ id }: { id: string }) {
  const product: ProductProps | null = await fetchProductById(id)
  if (!product) {
    return <p>Produtos não encontrados</p>
  }
  const valorParcelado = ((product.price ?? 0) * 0.1) + (product.price ?? 0)
  const parcelas = (product.price?? 0) / 10
  return (
    <section className='flex flex-col w-full items-center py-8  gap-4'>
      <main className='flex flex-col w-full max-w-[1080px] gap-9 bg-white py-5  px-5 rounded-lg shadow-md'>
        <h4 className='font-semibold'>{product.name}</h4>
        <div className='flex w-full justify-between'>
          <div className='w-[45%]'>
            <div className='flex  gap-8 items-center'>
              <p className='text-xl font-semibold'>{product.manufacturer}</p>
              <Favorite className=' stroke-gray-600  ' />
            </div>
            <Image src={product.image_url[0]} alt={`Imagem ${product.image_url[0]}`} width={250} height={300} />
            
          </div>

          <div className='flex flex-col gap-4 w-[45%]'>
            <h3>{formatCurrencyBRL(product.price)}</h3>
            <div className='flex gap-4 items-center'>
              <ButtonAddCart product={product} />
            </div>
            <p>Á vista no PIX com até 10% <b>OFF</b></p>
            <p>{formatCurrencyBRL(valorParcelado)}</p>
            <p>Em até 10x de <b>{formatCurrencyBRL(parcelas)}</b> sem juros</p>
          </div>
        </div>
      </main>

      <main className='flex flex-col w-full max-w-[1080px] gap-2 bg-white py-5  px-5 rounded-lg shadow-md'>
        <h4 className='font-semibold uppercase'>Descrição do produto</h4>
        <p>{product.description}</p>
      </main>

      <main className='flex flex-col w-full max-w-[1080px] gap-2 bg-white py-5  px-5 rounded-lg shadow-md'>
        <h4 className='font-semibold uppercase'>Informações técnicas</h4>
        <p>{product.technicalInfo}</p>
      </main>

    </section>
  )
}


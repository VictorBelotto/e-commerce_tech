'use client'
import React from 'react'
import Favorite from '../icons/favorite'
import Image from 'next/image'
import { formatCurrencyBRL } from '@/app/lib/utils'
import { ButtonAddCart } from '../components/buttons'
import { useProducts } from '@/hooks/useProducts'

export default function Product({ id }: { id: string }) {
  const { products } = useProducts()
  const product = products?.find((p) => p.id === id)
  if (!product) {
    return <p>Produtos não encontrados</p>
  }
  const valorParcelado = ((product.price ?? 0) * 0.1) + (product.price ?? 0)
  const parcelas = (valorParcelado ?? 0) / 10
  return (
    <section className='flex flex-col w-full items-center py-8 gap-4 text-white rounded-lg shadow-md'>
      <main className='flex flex-col w-full max-w-[1080px] gap-9 py-5  px-5 '>
        <h4 className='font-semibold'>{product.name}</h4>
        <div className='flex w-full justify-between'>
          <div className='w-[45%] overflow-hidden'>
            <Image src={product.image_url[0]} alt={`Imagem ${product.image_url[0]}`} width={500} height={500} className='w-full h-full' />
          </div>

          <div className='flex flex-col'>

            <div className='flex w-full items-center justify-between '>
              <p className='font-semibold'>Marca: {product.manufacturer}</p>
              <Favorite className=' stroke-red-600  fill-none cursor-pointer' />
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
      </main>

      <section className='flex flex-col w-full max-w-[1080px] gap-2 py-5  px-5'>
        <h4 className='font-semibold uppercase text-red-600'>Descrição do produto</h4>
        <p>{product.description}</p>
      </section>

      <section className='flex flex-col w-full max-w-[1080px] gap-2 py-5  px-5'>
        <h4 className='font-semibold uppercase text-red-600'>Informações técnicas</h4>
        <p>{product.technicalInfo}</p>
      </section>

    </section>
  )
}


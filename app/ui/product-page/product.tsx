'use client'
import React from 'react'
import Favorite from '../icons/favorite'
import Image from 'next/image'
import { formatCurrencyBRL } from '@/app/lib/utils'
import { ButtonAddCart } from '../components/buttons'
import { useProducts } from '@/hooks/useProducts'

export default function Product({ id }: { id: string }) {
  const {products} = useProducts()
  const product = products?.find((p) => p.id === id)
  if (!product) {
    return <p>Produtos não encontrados</p>
  }
  const valorParcelado = ((product.price ?? 0) * 0.1) + (product.price ?? 0)
  const parcelas = (valorParcelado ?? 0) / 10
  return (
    <section className='flex flex-col w-full items-center py-8  gap-4'>
      <main className='flex flex-col w-full max-w-[1080px] gap-9 bg-white py-5  px-5 rounded-lg shadow-md'>
        <h4 className='font-semibold'>{product.name}</h4>
        <div className='flex w-full justify-between'>
          <div className='w-[45%] h-[280px] overflow-hidden'>
            <div className='flex  gap-8 items-center'>
              <p className='text-xl font-semibold'>{product.manufacturer}</p>
              <Favorite className=' stroke-gray-600  ' />
            </div>
            <Image src={product.image_url[0]} alt={`Imagem ${product.image_url[0]}`} width={250} height={300} />

          </div>

          <div className='flex flex-col'>
            <div className='flex gap-16 mb-4'>
              <h3 className='font-bold'>{formatCurrencyBRL(product.price)}</h3>
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


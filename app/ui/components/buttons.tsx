'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { ProductProps } from '@/app/lib/definitions'
import { useCartStore } from '@/app/context/store'


export function ButtonAddCart({ product }: { product: ProductProps }) {
  const { addToCart, setCheckout } = useCartStore();
  const handleAdd = (product: ProductProps) =>{
    addToCart(product)
    setCheckout('cart')
    console.log('add')
  }
  return (
      <Button className='flex gap-2 items-center justify-center w-full' colorScheme='orange' color='white' variant="solid"  onClick={() => handleAdd(product)}>
        Adicionar ao carrinho
        <AddCart />
      </Button>
  )
}




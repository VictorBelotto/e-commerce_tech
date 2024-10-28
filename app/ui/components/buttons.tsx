'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { ProductProps } from '@/app/lib/definitions'
import { useCartStore } from '@/app/context/store'



export function ButtonAddCart({ product }: { product: ProductProps }) {
  const  {addToCart}  = useCartStore();
  return (
      <Button className='flex gap-3' colorScheme='cyan' color='gray.700' variant="solid"  onClick={() => addToCart(product)}>
        Adicionar ao carrinho
        <AddCart />
      </Button>
  )
}




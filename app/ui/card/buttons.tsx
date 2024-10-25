'use client'

import { Button, color } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { ProductProps } from '@/app/lib/definitions'
import { useCartStore } from '@/app/context/store'



export function ButtonAddCart({ product }: { product: ProductProps }) {
  const  {addToCart}  = useCartStore();
  return (
    <>
      <Button variant="ghost" onClick={() => addToCart(product)}>
        <AddCart />
      </Button>
    </>
  )
}

export function ButtonRemoveToCart({ id }: { id: string }) {
  const  {removeFromCart}  = useCartStore();
  return (
    <>
      <Button onClick={() => removeFromCart(id)} size={"sm"}  color={'white'} colorScheme='red' >
        Remover
      </Button>
    </>
  )
}


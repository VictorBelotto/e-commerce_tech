'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { ProductProps } from '@/app/lib/definitions'
import { fetchCart, removeItemCart } from '@/app/lib/actions'
import { useCartStore } from '@/app/context/cart-context'



export function ButtonBuy({ product }: { product: ProductProps }) {
  return (
    <>
      <Button variant='solid' colorScheme='blue' className='w-36' onClick={() => fetchCart()}>
        Comprar
      </Button>
    </>
  )
}

export function ButtonAddCart({ product }: { product: ProductProps }) {
  const  addItemToCart  = useCartStore((state) => state.addItemToCart);
  return (
    <>
      <Button variant="ghost" onClick={() => addItemToCart(product)}>
        <AddCart />
      </Button>
    </>
  )
}

export function ButtonRemoveToCart({ id }: { id: string }) {
  const  removeItemFromCart  = useCartStore((state) => state.removeItemFromCart);
  return (
    <>
      <Button onClick={() => removeItemFromCart(id)} size={"sm"}>
        Remover
      </Button>
    </>
  )
}


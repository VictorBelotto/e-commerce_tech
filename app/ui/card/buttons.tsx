'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { addItemToCart } from '@/app/lib/actions'
import { ProductProps } from '@/app/lib/definitions'
import { fetchCart, removeItemCart } from '@/app/lib/actions'

export function ButtonBuy({product} : {product : ProductProps}) {
  return (
    <Button variant='solid' colorScheme='blue' className='w-36' onClick={() => fetchCart()}>
      Comprar
    </Button>
  )
}

export function ButtonAddCart({product} : {product : ProductProps}) {

  return (
    <Button variant="ghost" onClick={() => addItemToCart(product)}>
      <AddCart />
    </Button>
  )
}

export function ButtonRemoveToCart ({id} : {id: string}){
  return(
    <Button onAbort={()=> removeItemCart(id)}>
     Remover 
    </Button>
  )
}


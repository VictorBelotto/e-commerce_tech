'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'

export function ButtonBuy() {
  return (
    <Button variant='solid' colorScheme='blue' className='w-36' >
      Comprar
    </Button>

  )
}
export function ButtonAddCart() {
  return (
    <Button variant="ghost" >
      <AddCart />
    </Button>
  )
}


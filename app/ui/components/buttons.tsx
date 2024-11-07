'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { ProductProps } from '@/app/lib/definitions'
import { useCartStore } from '@/app/context/store'
import Favorite from '../icons/favorite'
import { useFavoriteStore } from '@/app/context/favoriteStore'


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

export function ButtonAddFavorite({ product }: { product: ProductProps }) {
  const {addToFavorites}  = useFavoriteStore();
  const handleAdd = (product: ProductProps) =>{
    addToFavorites(product)
  }
  return (
      <Button className='flex gap-2 items-center justify-center w-full' colorScheme='orange' color='white' variant="solid"  onClick={() => handleAdd(product)}>
        <Favorite  className='fill-red-500 stroke-red-500'/>
      </Button>
  )
}


'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import AddCart from '../icons/addCart'
import { ProductProps } from '@/app/lib/definitions'
import { useCartStore } from '@/app/context/store'
import Favorite from '../icons/favorite'
import { useFavoriteStore } from '@/app/context/favoriteStore'
import clsx from 'clsx'

export function ButtonAddCart({ product }: { product: ProductProps }) {
  const { addToCart, setCheckout } = useCartStore();
  const handleAdd = (product: ProductProps) => {
    addToCart(product)
    setCheckout('cart')
    console.log('add')
  }
  return (
    <Button className='flex gap-2 items-center justify-center w-full' colorScheme='orange' color='white' variant="solid" onClick={() => handleAdd(product)}>
      Adicionar ao carrinho
      <AddCart />
    </Button>
  )
}

export function ButtonAddFavorite({ product }: { product: ProductProps }) {
  const { addToFavorites, favorites, removeFromFavorites } = useFavoriteStore();
  const isFavorite = favorites.some(p => p.id === product.id)
  const handleToggle = (product: ProductProps) => {
    if (isFavorite) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }

  }
  return (
    <Button className='z-30 flex gap-2 items-center justify-center w-fit' colorScheme='white' variant="ghost" onClick={() => handleToggle(product)}>
      <Favorite className={isFavorite ? 'stroke-red-500 fill-red-500' : 'stroke-white fill-none'} />
    </Button>
  )
}


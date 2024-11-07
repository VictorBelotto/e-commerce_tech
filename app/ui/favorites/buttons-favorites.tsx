'use client'
import { Button } from '@chakra-ui/react';
import React from 'react'
import AddCart from '../icons/addCart';
import { ProductProps } from '@/app/lib/definitions';
import { useFavoriteStore } from '@/app/context/favoriteStore';
import { useCartStore } from '@/app/context/store';
import Favorite from '../icons/favorite';

export function ButtonAddFavorite({ product }: { product: ProductProps }) {
  const {removeFromFavorites}  = useFavoriteStore();
  const handleRemove = (product: ProductProps) =>{
    removeFromFavorites(product.id)
  }
  return (
      <Button className='flex gap-2 items-center justify-center w-full'  variant="ghost"  onClick={() => handleRemove(product)}>
        <Favorite  className='fill-red-500 stroke-red-500'/>
      </Button>
  )
}

export function ButtonAddCart({ product }: { product: ProductProps }) {
  const {addToCart}  = useCartStore();
  const handleAdd = (product: ProductProps) =>{
    addToCart(product)
  }
  return (
      <Button className='flex gap-2 items-center justify-center w-full' colorScheme='orange' color='white' variant="solid"  onClick={() => handleAdd(product)}>
        <AddCart />
      </Button>
  )
}
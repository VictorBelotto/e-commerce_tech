'use client'
import { Button } from '@chakra-ui/react';
import React from 'react'
import { ProductProps } from '@/app/lib/definitions';
import { useFavoriteStore } from '@/app/context/favoriteStore';
import Favorite from '../icons/favorite';

export function ButtonAddFavorite({ product }: { product: ProductProps }) {
  const {removeFromFavorites}  = useFavoriteStore();
  const handleRemove = (product: ProductProps) =>{
    removeFromFavorites(product.id)
  }
  return (
      <Button className='flex gap-2 items-center justify-center w-fit'  variant="ghost" colorScheme='white'  onClick={() => handleRemove(product)}>
        <Favorite  className='fill-red-500 stroke-red-500'/>
      </Button>
  )
}
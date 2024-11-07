'use client'
import { useFavoriteStore } from '@/app/context/favoriteStore'
import React from 'react'
import FavoriteCard from './favorite-card'

const FavoritesWrapper = () => {
  const {favorites} = useFavoriteStore()
  return (
    <div className='flex flex-col gap-4'>
      {favorites.map((product) =>(
       <FavoriteCard product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default FavoritesWrapper
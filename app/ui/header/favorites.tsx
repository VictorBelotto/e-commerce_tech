'use client'
import React from 'react'
import Cart from '../icons/cart'
import { useCartStore } from '@/app/context/store'
import { useFavoriteStore } from '@/app/context/favoriteStore'
import Favorite from '../icons/favorite'

const FavoritesComponent = () => {
  const {favorites} = useFavoriteStore()
  return (
    <div className="flex">
      <Favorite className="cursor-pointer" />
      <span className="flex justify-center items-center bg-orange-500 rounded-full w-5 h-5 ml-1 text-sm font-semibold text-white">{favorites.length}</span>
    </div>
  )
}

export default FavoritesComponent
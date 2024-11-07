'use client'
import { useFavoriteStore } from '@/app/context/favoriteStore'
import React from 'react'
import FavoriteCard from './favorite-card'
import Favorite from '../icons/favorite'

const FavoritesWrapper = () => {
  const { favorites } = useFavoriteStore()
  return (
    <main className='flex flex-col w-full max-w-[1480px] mt-8 px-4 py-4 bg-[#303030] rounded-lg h-fit'>
      <div className='flex gap-2 items-center mb-4'>
        <Favorite className='stroke-red-500 fill-red-500'/>
        <h4 className="text-white text-2xl">Meus Favoritos</h4>
        
      </div>
      <hr className='border-red-500 w-24 mb-4'/>
      <div className='flex flex-col gap-4'>
        {favorites.map((product) => (
          <>
            <FavoriteCard product={product} key={product.id} />
            <hr className='my-2 border-gray-700' />
          </>
        ))}
      </div>
    </main>
  )
}

export default FavoritesWrapper
'use client'
import React from 'react'
import { useSearchStore } from '@/app/context/searchStore' 

export default function Search() {
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery)

  const handleSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const lowercaseSearch = event.target.value.toLowerCase()
    setSearchQuery(lowercaseSearch)
  }

  return (
    <input
      type="text"
      placeholder="Busque aqui"
      className="px-2 w-96 rounded-md border-none focus:outline-none text-white bg-[#424242]"
      onChange={handleSearchChange}
    />
  )
}

'use client'

import { useSearchStore } from "@/app/context/searchStore"
import { CardItem } from "./card-item"
import { useProducts } from "@/hooks/useProducts"
import { useEffect } from "react"

export default  function CardWrapper() {
  const products = useProducts()
  const {searchQuery} = useSearchStore()

const filteredProducts = products.products?.filter((p) => {
    const productName = p.name.toLowerCase()
    const searchTerms = searchQuery.toLowerCase().split(" ") 
    return searchTerms.every(term => productName.includes(term)) 
  })?? []
  
  const productsArray = products?.products

  const productsExists = filteredProducts?.length > 0 ? filteredProducts : productsArray


  return (
    <section className='flex justify-center flex-wrap gap-2 w-full max-w-[1480px] '>
        {productsExists?.map((products) => (
        <CardItem key={products.id} product={products} />
      ))}
    </section>
  )
}

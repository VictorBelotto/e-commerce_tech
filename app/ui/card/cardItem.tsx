import React from 'react'
import { Button, ButtonGroup} from '@chakra-ui/react'
import { fetchProducts } from '@/app/lib/data'
import AddCart from '../icons/addCart'
import Image from 'next/image'
import { highlights } from '@/app/seed/initialProducts' 

interface dataProps  {
  name : string,
  id : string, 
  price : number,
  image_url : string[] | string
}

export  function CardItem( {product} : {product : dataProps}) {
  const { name, id, price, image_url } = product 

  return (
    <section className=' rounded-lg flex flex-col py-2 px-2 gap-4 shadow-md' id={id}>
      <div>
        {Array.isArray(image_url)? (
         
          <Image src={image_url[0]} alt={`Imagem ${image_url[0]}`} width={288} height={192}/>
         
        ) : (
          <div className='w-72 h-48 bg-slate-700 rounded-lg'></div>
        )}

        <div className='flex flex-col gap-4 mt-4'>
          <p className='w-72'>{name}</p>
          <p className='font-semibold text-xl'>
            {`R$ ${price}`}
          </p>
        </div>
      </div>
      <div>
        <div className='flex gap-6 items-center'>
          <Button variant='solid' colorScheme='gray'>
            Comprar
          </Button>
          <AddCart/>
        </div>
      </div>
    </section>
  )
}

export default function cardWrapper(){
  const data = fetchProducts()
  return(
    <section className='flex flex-wrap gap-8'>
      {data.map((data, index)=>(
        <CardItem  key={data.id} product={data}/>
      ))}
    </section>
  )
}

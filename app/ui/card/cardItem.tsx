import React from 'react'
import { Button, ButtonGroup} from '@chakra-ui/react'

export default function CardItem() {
  return (
    <section className=' rounded-lg flex flex-col py-2 px-2 gap-4 shadow-md'>
      <div>
        <div className='w-72 h-48 bg-slate-700 rounded-lg'></div>
        <div className='flex flex-col gap-4 mt-4'>
          <p className='w-72'>Computador gamer Pichau Taurus, 16Gb ram, 1TB SSD, RTX 3050TI</p>
          <p className='font-semibold text-xl'>
            $450
          </p>
        </div>
      </div>
      <div>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='gray'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='gray'>
            Add to cart
          </Button>
        </ButtonGroup>
      </div>
    </section>
  )
}

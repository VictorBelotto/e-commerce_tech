import React from 'react'

const Description = ({description} : {description : string}) => {
  return (
    <section className='flex flex-col w-full max-w-[1080px] gap-2 py-5  px-5'>
      <h4 className='font-semibold uppercase text-red-600'>Descrição do produto</h4>
      <p>{description}</p>
    </section>)
}

export default Description
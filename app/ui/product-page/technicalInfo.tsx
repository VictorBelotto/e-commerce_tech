import React from 'react'

const TechnicalInfo = ({technicalInfo} : {technicalInfo : string}) => {
  return (
    <section className='flex flex-col w-full max-w-[1080px] gap-2 py-5  px-5'>
      <h4 className='font-semibold uppercase text-red-600'>Informações técnicas</h4>
      <p>{technicalInfo}</p>
    </section>
  )
}

export default TechnicalInfo
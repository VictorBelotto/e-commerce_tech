import React from 'react'

interface Props{
  params : {id : string}
}

function ProductID({params} : Props) {


  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}

export default ProductID
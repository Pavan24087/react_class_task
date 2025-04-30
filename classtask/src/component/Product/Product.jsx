import React from 'react'
import './Product.css'
const Product = (abc) => {
  console.log(abc)
  const Product=abc
 
  return (

    <div id='product_container'>
      {Product.children.map((val)=>{
return(
  <div id='product'>
      <h1>{val.id}</h1>
      <h1>{val.name}</h1>
      <h2>{val.cost}</h2>
    </div>
)
      })}
   
    </div>  
  )
}

export default Product

import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Product from './component/Product/Product'
const App = () => {
  const Products=[
    {id:1,name:"laptop",cost:55000},
    {id:2,name:"mobile",cost:15000}
]
  return (
    <div>
      <Navbar/>
     <Product>{Products}</Product>
    </div>
  )
}

export default App

import React from 'react'
import './ProductsShown.css'
const ProductsShown = ({product1, product2, product3}) => {
  return (
    <div className='productsShown'>
      <img src={product1} alt="" />
      <img src={product2} alt="" />
      <img src={product3} alt="" />
    </div>
  )
}

export default ProductsShown
import React from 'react';
import ProductItem from '../product-item/ProductItem';

function ProductList(props) {
  return (
    <div className='products'>
      {props.products.map(productItem => {
        return <ProductItem productItem={productItem} key={productItem.id} />
      })}
    </div>
  )
}

export default ProductList;
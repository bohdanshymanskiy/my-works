import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import ListCSS from './ProductList.module.css'

function ProductList({ allProducts, deleteItem, infoId }) {
  return (
    <div className={ListCSS.products}>
      {allProducts.map(productItem => {
        return <ProductItem productItem={productItem} key={productItem.id} deleteProduct={deleteItem} infoId={infoId} />
      })}
    </div>
  )
}

export default ProductList;
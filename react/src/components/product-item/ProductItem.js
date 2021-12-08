import React, { useContext } from "react";
import Context from "../../context";

function ProductItem({ productItem }) {
  const { removeProduct } = useContext(Context)
  return <div className='products-item'>
    <div className='products-img'>
      <img src={productItem.thumbnailUrl} />
    </div>
    <h3>{productItem.title}</h3>
    <div className='products-coast'>
      <div className='products-price'>{productItem.id} USD</div>
      <button className='delete-item' onClick={() => removeProduct(productItem.id)}>&times;</button>
    </div>
  </div>
}

export default ProductItem;
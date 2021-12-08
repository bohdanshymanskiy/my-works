import React from "react";
import ItemCSS from './ProductItem.module.css';

function ProductItem({ productItem, deleteProduct, infoId }) {

  const deleteItem = (e) => {
    e.stopPropagation()
    deleteProduct(id)
  }

  const { id, imageUrl, name, count } = productItem;
  return <div className={ItemCSS.products_item} onClick={() => infoId(id)}>
    <div className={ItemCSS.products_img}>
      <img src={imageUrl} alt={name} />
    </div>
    <h4>{name}</h4>
    <div className={ItemCSS.products_coast}>
      <div className={ItemCSS.products_price}>Count: {count}</div>
      <button type='button' className={ItemCSS.delete_item} onClick={deleteItem}>&times;</button>
    </div>
  </div >
}

export default ProductItem;
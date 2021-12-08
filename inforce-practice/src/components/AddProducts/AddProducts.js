import React, { useState } from 'react';
import AddProductsCSS from './AddProducts.module.css';

function AddProducts({ setActive, sortProduct, select }) {
  return (
    <div className={AddProductsCSS.box_button}>
      <button type='button' onClick={() => setActive(true)}>Add Products</button>
      <select name='sortProduct'
        onChange={sortProduct}
        value={select || 'Sort'}>
        <option disabled value='Sort'>Sort by</option>
        <option value='count'>By Count</option>
        <option value='names'>By Name</option>
      </select>
    </div >
  )
}

export default AddProducts;
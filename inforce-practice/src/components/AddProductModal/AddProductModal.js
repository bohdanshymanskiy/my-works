import React, { useEffect, useState } from 'react';
import styled from './AddProductModal.module.css';

const urlName = 'URL';
const weightName = 'weight';
const countName = 'count';
const productName = 'ProductName';
function AddProductModal({ active, setActive, addProducts, editInfoProduct }) {

  const [url, setUrl] = useState(null)
  const [product, setProduct] = useState(null)
  const [count, setCount] = useState(null)
  const [weight, setWeight] = useState(null)

  useEffect(() => {
    if (editInfoProduct) {
      const { name, imageUrl, count, weight } = editInfoProduct
      setUrl(imageUrl)
      setProduct(name)
      setCount(count)
      setWeight(weight)
    }
  }, [editInfoProduct])

  const setValue = (e) => {
    let { name, value } = e.target;
    if (name === urlName) {
      setUrl(value)
    } else if (name === productName) {
      setProduct(value)
    } else if (name === countName) {
      setCount(value)
    } else if (name === weightName) {
      setWeight(value)
    }
  }

  const addOrEdit = () => {
    const newProduct = { url, product, count, weight }
    if (!url || !product || !count || !weight) {
      window.alert('Please fill all forms')
    } else {
      addProducts(newProduct)
    }
    setUrl(null)
    setProduct(null)
    setCount(null)
    setWeight(null)
  }

  return (
    <div className={active ? styled.modal + ' ' + styled.active : styled.modal} onClick={() => setActive(false)}>
      <div className={styled.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={styled.input_box}>
          <div>
            <label>
              <input type='text' name={urlName}
                className={styled.input_item}
                placeholder='URL'
                onChange={setValue}
                value={url || ''} />
            </label>
          </div>
          <div>
            <label>
              <input type='text' name={productName}
                className={styled.input_item}
                placeholder='Product Name'
                onChange={setValue}
                value={product || ''} />
            </label>
          </div>
          <div>
            <label>
              <input type='number' name={countName}
                className={styled.input_item}
                placeholder='Count'
                onChange={setValue}
                value={count || ''} />
            </label>
          </div>
          <div>
            <label>
              <input type='number' name={weightName}
                className={styled.input_item}
                placeholder='Weight'
                onChange={setValue}
                value={weight || ''} />
            </label>
          </div>
        </div>
        <div className={styled.button_box}>
          <button type='button' onClick={addOrEdit}>Submit</button>
          <button type='button' onClick={() => setActive(false)}>Cancel</button>
        </div>
      </div>
    </div >
  )
}

export default AddProductModal;
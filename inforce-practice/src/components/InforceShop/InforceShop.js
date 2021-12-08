import React, { useState, useCallback, useEffect } from 'react';
import Header from '../Header/Header';
import AddProducts from '../AddProducts/AddProducts';
import AddProductModal from '../AddProductModal/AddProductModal';
import ProductList from '../ProductList/ProductList';
import ProductInfoModal from '../ProductInfoModal/ProductInfoModal';
//localStorage.clear()
const setProduct = (products = []) => {
  try {
    localStorage.setItem('allProducts', JSON.stringify(products))
  } catch (e) {
    alert(e.message)
  }
}

const getProducts = () => {
  try {
    return JSON.parse(localStorage.getItem('allProducts')) || []
  } catch (e) {
    alert(e.message)
    return [];
  }
}
const size = {
  width: 200,
  height: 200
}

function InforceShop() {

  const [modalActive, setModalActive] = useState(false)
  const [allProducts, setProducts] = useState(getProducts)
  const [editId, setEditId] = useState(null)
  const [select, setSelect] = useState(null)
  const [infoId, setInfoId] = useState(null)

  useEffect(() => {
    if (allProducts.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
        .then(response => response.json())
        .then(json => json.map(element => {
          const { id, thumbnailUrl, title, url } = element
          return { id, imageUrl: thumbnailUrl, name: title, count: title.length, size, weight: url.length, comments: [] }
        }))
        .then(productFromShop => {
          setProducts(productFromShop)
          setProduct(productFromShop)
        })
    }
  }, [])

  const addProducts = (prod) => {
    const { url, product, count, weight } = prod;
    let editProducts;
    if (editId) {
      editProducts = allProducts.map(item => {
        if (item.id === editId) {
          return { ...item, imageUrl: url, name: product, count, weight }
        }
        return item;
      })
    } else {
      const newProduct = { id: Date.now(), imageUrl: url, name: product, count, size, weight: weight + 'g', comments: [] }
      editProducts = [...allProducts, newProduct];
    }
    setProducts(editProducts)
    setEditId(null)
    setProduct(editProducts)
    setModalActive(false)
    setSelect(null)
  }

  const sortProduct = (e) => {
    let sortProducts;
    const { value } = e.target;
    if (value) {
      if (value === 'names') {
        sortProducts = allProducts.slice().sort((a, b) => {
          const aFirstLetter = a.name.trim().toLowerCase()
          const bFirstLetter = b.name.trim().toLowerCase()
          return aFirstLetter.localeCompare(bFirstLetter)
        })
      } else if (value === 'count') {
        sortProducts = allProducts.slice().sort((a, b) => b.count - a.count)
      }
    }
    setProducts(sortProducts);
    setProduct(sortProducts);
    setSelect(value)
  }

  const productInfo = (id) => {
    setInfoId(id)
  }
  const infoItem = infoId ? allProducts.filter(item => item.id === infoId) : [{}];

  const deleteItem = useCallback((id) => {
    const areYouSure = window.confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      const updateProducts = allProducts.filter(product => product.id !== id)
      setProducts(updateProducts);
      setProduct(updateProducts);
    }
  }, [allProducts])

  const editProduct = (id) => {
    setEditId(id)
    setInfoId(null)
    setModalActive(true)
  }

  const addNewComment = (comment) => {
    let productsWithComment;
    const dateAtMoment = new Date().toUTCString();
    const newComment = { id: Date.now(), productId: infoId, description: comment, date: dateAtMoment }
    productsWithComment = allProducts.map(item => {
      if (item.id === infoId) {
        const allComments = item.comments
        return { ...item, comments: [...allComments, newComment] };
      }
      return item
    })
    setProducts(productsWithComment);
    setProduct(productsWithComment);
  }

  const [editInfoProduct] = allProducts.filter(product => product.id === editId);
  return (
    <div>
      <Header />
      <AddProducts setActive={setModalActive} sortProduct={sortProduct} select={select} />
      <AddProductModal active={modalActive} setActive={setModalActive} addProducts={addProducts} editInfoProduct={editInfoProduct} />
      <ProductList allProducts={allProducts} deleteItem={deleteItem} infoId={productInfo} />
      <ProductInfoModal infoId={infoId} setInfoId={setInfoId} infoItem={infoItem} editProduct={editProduct} addNewComment={addNewComment} />
    </div>
  )
}

export default InforceShop;
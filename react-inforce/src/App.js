import React, { useState, useEffect } from "react";
import ProductList from "./components/product-list/ProductList";
import Context from "./context";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => response.json())
      .then(products => setProducts(products))
  }, [])
  function removeProduct(id) {
    setProducts(products.filter(productItem => productItem.id !== id))
  }
  return (
    <div className='wrapper'>
      <Context.Provider value={{ removeProduct }}>
        <h1>Products Shop</h1>
        <ProductList products={products} />
      </Context.Provider>
    </div>
  )
}

export default App;

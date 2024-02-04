import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"
import { Link } from "react-router-dom"



export const ProductList = () => {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')



  useEffect(() => {

  const getProducts = async () => {
    const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products?category=${category}`)
    setProducts(res.data)

  }
  getProducts()
}, [category])

  return (
    <>
    <div className="categories-container">
        <div className="categories-card">
          <h1> Categories </h1>
          <div className="categories-products">
            <button onClick={() => setCategory ('TV')} className="category-btn"> Tv  </button>
            <button onClick={() => setCategory ('mobiltelefoner')} className="category-btn"> Phones </button>
            <button onClick={() => setCategory ('laptop')} className="category-btn"> Laptop </button>
            <button onClick={() => setCategory ('dammsugare')} className="category-btn"> Vacuums </button>
          </div>
        </div>
      </div>
      <div className="products-card">
        {
          products.map(product => (
            <Product key={product._id} product={product}  />   
            ))
          }
      </div>
    </>
  )
}
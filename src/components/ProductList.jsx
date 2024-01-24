import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"


export const ProductList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

  const getProducts = async () => {
    const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
    setProducts(res.data)

  }
  getProducts()
}, [])

  return (
    <div className="products-card">
      {
        products.map(product => (
          <Product key={product._id} product={product}  />    // _id?
        ))
      }
    </div>
  )
}
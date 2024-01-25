import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function ProductDetails() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(null)
  const { id } = useParams()  //parameter i URL:en
  

  useEffect(() => {
    setLoading(true)

  const getProduct = async () => {
    const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
    setProduct(res.data)
    setLoading(false)

  }
  getProduct()
}, [])

return (
  <div className="details-container">
    {loading && <p>Loading...</p>}
    {product && (
      <div className="images-box">
        <img src={product.images[0]} alt={product.name} className="big-image" />
        <div className="small-image-box">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.name} />
          ))}
        </div>
        <div className="details-box">
          <p>{product.name}</p>
          <p> {product.price} SEK </p>
          <p>{product.description}</p>
        <button className="buy-btn">BUY</button>
        </div>
      </div>
    )}
  </div>
);

}
export default ProductDetails
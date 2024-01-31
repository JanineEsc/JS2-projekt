import { Link } from "react-router-dom"


const Product = ({ product } ) => {
  return (
     <Link to={"/details/" + product._id} className="product">
      <div className="image-container">
       <img src={product.images[0]} />
       <img src={product.images[1]} alt={product.description}  />
      </div>
      <div className="info-product">
        <p> {product.name}</p>
        <p> {product.price} SEK </p>
        <button className="more-btn"> More </button>
      </div>
    </Link>
   
  )
}
export default Product
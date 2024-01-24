const Product = ({ product } ) => {
  return (
     <div className="product">
      <div className="image-container">
       <img src={product.images[0]} />
       <img src={product.images[1]} alt={product.description}  />
      </div>
      <p> {product.name}</p>
    </div>
   
  )
}
export default Product
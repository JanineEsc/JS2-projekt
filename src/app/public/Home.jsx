import { useEffect } from "react"
import { ProductList } from "../../components/ProductList"
import {useDispatch,  useSelector } from 'react-redux'
import { getProducts } from "../../store/features/products/productSlice"
import video from "../../images/video.mp4"





function Home() {
  
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  
  const { products, loading, error }= useSelector(state => state.productList)

  
  if(error) return (
    <div> 
      <p> { error }</p> 
    </div>
  )

  return (
    <>
      <div className="home-container">
        <video className="overlay-video" autoPlay loop muted >
         <source src={video} type="video/mp4" />
        </video>
          <h1>SAMSONS TECHNOLOGY</h1>
          <p> -  Where Vision Meets Precision in Every Product </p>
      </div>
      <ProductList />
    </>
  )
}
export default Home
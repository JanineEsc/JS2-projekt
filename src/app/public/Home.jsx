import { ProductList } from "../../components/ProductList"

function Home() {



  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <h1>SAMSONS TECHNOLOGY</h1>
          <p> -  Where Vision Meets Precision in Every Product </p>
        </div>
      </div>
        <ProductList />
    </>
  )
}
export default Home
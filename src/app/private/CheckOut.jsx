import { ShoppingCart } from "../../components/ShoppingCart"

function CheckOut() {
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h1> Checkout </h1>
        <ShoppingCart />
      </div>
   </div>
  )
}
export default CheckOut
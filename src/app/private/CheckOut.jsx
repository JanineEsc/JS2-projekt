import { ShoppingCart } from "../../components/ShoppingCart"

function CheckOut() {
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <ShoppingCart isCheckoutPage />
      </div>
   </div>
  )
}
export default CheckOut
        

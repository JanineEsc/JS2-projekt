import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"





export const ShoppingCart = () => {

const { cart, totalAmount } = useSelector(state => state.shoppingCart)

  return (
    <div>
      <div className="shoppingCart-container">
        { cart.map(item => (
          <CartItem key={ item.product._id } item={item} />
        ))}
      </div>
      <hr className="shoppingCart-hr" />
      <div className="items-container"> 
      <div>
        <p>Total price: 0</p>
        <small>Inkl. vat</small>
      </div>
      <div>
        <button className="checkout-btn"> Checkout </button>
      </div>
      </div>

    </div>
  )
}
import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { useEffect } from "react";
import { calcSum, clearCart} from "../store/features/shoppingCart/shoppingCartSlice";
import { Link } from "react-router-dom";




export const ShoppingCart = () => {

const { cart, totalPrice, } = useSelector(state => state.shoppingCart)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(calcSum ());
}, [dispatch, cart]);

const clearCartFromCart= () => {
  dispatch(clearCart())
}

  return (
    <div>
      { cart.length < 1 && (
        <div className="cartempty">
          <p> Your Cart is empty</p>
        </div>
      )}
      <div className="shoppingCart-container">
        { cart.map(item => (
          <CartItem key={ item.product._id } item={item} />
        ))}
      </div>
      <hr className="shoppingCart-hr"></hr> 
      <div className="items-container"> 
      <div>
        <p>Total price: {totalPrice} SEK</p>
        <small>Inkl. vat</small>
      </div>
      <div className="mp-btns">
        <Link to="/private/checkout" className="checkout-btn"> Checkout </Link>
        <button onClick={clearCartFromCart} className="clear-btn"> Clear Cart </button>
      </div>
      </div>

    </div>
  )
}
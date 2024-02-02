import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { useEffect } from "react";
import { calcSum, clearCart} from "../store/features/shoppingCart/shoppingCartSlice";
import { Link } from "react-router-dom";




export const ShoppingCart = ( { isCheckoutPage, setIsOpen }) => {

const { cart, totalPrice, } = useSelector(state => state.shoppingCart)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(calcSum ());
}, [dispatch, cart]);

const clearCartOfItems= () => {
  dispatch(clearCart())
}

const purchaseCompleteAlert = () => {
  window.alert('Purchase complete');
};

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
        <button onClick={clearCartOfItems} className="clear-btn"> Clear Cart </button>
        {
          isCheckoutPage
          && 
          <>
            <button onClick={() => { purchaseCompleteAlert(); clearCartOfItems(); }} className="clear-btn"> Buy</button>
          </>
        }
        { 
        !isCheckoutPage
        && 
        <Link onClick={() => setIsOpen(false)} to="/private/checkout" className="checkout-btn"> Checkout </Link>
        }
        
      </div>
      </div>

    </div>
  )
}
import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { useEffect, useState } from "react";
import { calcSum, clearCart} from "../store/features/shoppingCart/shoppingCartSlice";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext"




export const ShoppingCart = ( { isCheckoutPage, setIsOpen }) => {
  
const { token } = useAuth();
const { cart, totalPrice, } = useSelector(state => state.shoppingCart)
const dispatch = useDispatch();
const [orderNotification, setOrderNotification] = useState('')
const [postDiv, setPostDiv] = useState(false)

useEffect(() => {
  dispatch(calcSum ());
}, [dispatch, cart]);

const clearCartOfItems= () => {
  dispatch(clearCart())
}




const purchaseComplete= async () => {
  const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      products: cart.map(item => ({
        productId: item.product._id,
        quantity: item.quantity
      }))
    })
  });
    
  const resData = await res.json();
  if (res.ok) {
    setOrderNotification('You order has been placed!')
    clearCartOfItems()
  } else {
    setOrderNotification('Something went wrong!')
  }
  
  setPostDiv(true)
  console.log(resData);
}


  return (
    <>
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
                <button onClick={() => { purchaseComplete(); clearCartOfItems(); }} className="clear-btn"> Buy</button>
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
      {isCheckoutPage && postDiv &&
          <div className="order-notification">  
            <p>{orderNotification}</p>
          </div>
          }
    </>
  )
}
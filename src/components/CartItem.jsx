import { CiTrash } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeOne, addOne, removeItem } from "../store/features/shoppingCart/shoppingCartSlice";


export const CartItem = ({ item }) => {

  const dispatch= useDispatch()

  const removeOneFromCart = () => {
    dispatch(removeOne(item.product._id))
   
  }

  const addOneToCart = () => {
    dispatch(addOne(item.product._id))
  }

  const removeItemFromCart = () => {
    dispatch(removeItem(item.product._id))
  }


  


  return (
    <div className="cartitem-container">
      <div className="left"> 
        <img src={item.product.images[0]} alt="product-image" />
        <div className="info">
           <p> { item.product.name } </p>
           <p className="price"> { item.quantity } x { item.product.price } </p>
        </div>
      </div>
      
      <div className="right"> 
        <div className="mp-btns">
          <button onClick={removeOneFromCart}  className="minus"> <BiMinus /></button>
          <button onClick={addOneToCart} className="plus"> <GoPlus /></button>
        </div>
        <button onClick={removeItemFromCart} className="trash-btn"><CiTrash /></button>
      </div>
    </div>
  )
}
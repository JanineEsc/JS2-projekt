import { createSlice }  from "@reduxjs/toolkit"


const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0
}

export const shoppingCartSlice = createSlice ({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload._id)

      itemRef
      ? itemRef.quantity ++
      : state.cart = [...state.cart, { product: action.payload, quantity: 1}]

    },
    removeOne: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload)
      itemRef.quantity -- 
    },
    removeItem: () => {},
    clearCart: () => {}
  }
})

export const { addToCart, removeOne } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer

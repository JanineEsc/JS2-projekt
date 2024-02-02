import { createSlice }  from "@reduxjs/toolkit"


const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0
}
const getTotalQuantity = (cart) => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total                       
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

      state.totalQuantity = getTotalQuantity(state.cart)

    },
    removeOne: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload)
      itemRef.quantity -- 

      state.totalQuantity = getTotalQuantity(state.cart)

    },
    addOne: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload)
      itemRef.quantity ++

      state.totalQuantity = getTotalQuantity(state.cart)

      
    },
    removeItem: (state, action ) => {
      
      state.cart = state.cart.filter(item => item.product._id !== action.payload)

      state.totalQuantity = getTotalQuantity(state.cart)

    },
    calcSum: (state) => {
      state.totalPrice = state.cart.reduce((total, item) => {
        return total + item.product.price * item.quantity;     
      }, 0);

      state.totalQuantity = getTotalQuantity(state.cart)


    },
    clearCart: (state) => {
      state.cart = []

      state.totalQuantity = getTotalQuantity(state.cart)

    }
  }
})

export const { addToCart, removeOne, addOne, removeItem, calcSum, clearCart } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer

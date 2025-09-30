
import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "./UserSlice"

import cartSlice from "./CartSlice"
import ProductSlice from "./ProductSlice"

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartSlice,
    product: ProductSlice,
  },
})
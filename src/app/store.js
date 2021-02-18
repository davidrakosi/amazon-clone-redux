import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import cartReducer from '../features/cart/cartSlice'
import orderFormReducer from '../features/order/orderForm'

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    orderForm: orderFormReducer,
  },
});

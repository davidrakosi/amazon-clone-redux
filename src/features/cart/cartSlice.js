import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    amount: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: state => {
            state.amount = 0
            state.items = []
        },

        setCartItemCount: (state, action) => {
            state.amount += action.payload
        },

        setCartItems: (state, action) => {
            state.items.push(action.payload)
        }
    }
});

export const { resetCart, setCartItemCount, setCartItems } = cartSlice.actions

export const selectCartItemsAmount = state => state.cart.amount
export const selectCartItems = state => state.cart.items

export default cartSlice.reducer
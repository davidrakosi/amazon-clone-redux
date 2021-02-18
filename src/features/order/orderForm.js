import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderName: null,
    orderPhone: null,
    address1: null,
    address2: null,
    city: null,
    state: null,
    zip: null,
}

const orderForm = createSlice({
    name: 'orderForm',
    initialState,
    reducers: {
        setOrderName: (state, action) => {
            state.orderName = action.payload
        },

        setOrderPhone: (state, action) => {
            state.orderPhone = action.payload
        },

        setOrderAddress1: (state, action) => {
            state.address1 = action.payload
        },

        setOrderAddress2: (state, action) => {
            state.address2 = action.payload
        },

        setOrderCity: (state, action) => {
            state.city = action.payload
        },

        setOrderZip: (state, action) => {
            state.zip = action.payload
        },

    }
});

export const {
    setOrderName,
    setOrderPhone,
    setOrderAddress1,
    setOrderAddress2,
    setOrderCity,
    setOrderState,
    setOrderZip
} = orderForm.actions

export const selectOrderName = state => state.orderForm.orderName
export const selectOrderPhone = state => state.orderForm.orderPhone

export const selectOrderAddress1 = state => state.orderForm.address1
export const selectOrderAddress2 = state => state.orderForm.address2
export const selectOrderCity = state => state.orderForm.city
export const selectOrderState = state => state.orderForm.state
export const selectOrderZip = state => state.orderForm.zip

export default orderForm.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    itemsInCart: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },

        setSignOutState: state => {
            state.name = null
            state.email = null
            state.itemsInCart = 0
        },

        incrementCartItemCountByAmount: (state, action) => {
            state.itemsInCart += action.payload
        },

        emptyCart: state => {
            state.itemsInCart = 0
        }

    }
}
)

export const { setUserLoginDetails, setSignOutState, incrementCartItemCountByAmount, emptyCart } = userSlice.actions

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectCartItemCounter = state => state.user.itemsInCart

export default userSlice.reducer
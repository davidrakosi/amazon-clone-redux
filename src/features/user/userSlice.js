import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null
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
            }
        }
    }
)

export const {setUserLoginDetails, setSignOutState} = userSlice.actions

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email

export default userSlice.reducer
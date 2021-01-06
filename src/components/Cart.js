import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { selectUserEmail } from '../features/user/userSlice'

const Cart = () => {
    const userEmail = useSelector(selectUserEmail)

    return (
        <div className='cart'>
            <img
                className="cart__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="Cart Top Ad"
            />


            <h3>Hello, {userEmail}</h3>
            <h2 className="cart__title">Your shopping Cart</h2>


        </div >
    )
}

export default Cart

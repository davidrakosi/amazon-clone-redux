import React, { useEffect } from 'react'

const Cart = () => {

    return (
        <div className='cart'>
            <div className="cart__list">

            </div>

            <div className="cart__total">
                <h2>Subtotal { }: { }</h2>
                <div className="cart__totalGiftWrap">
                    <input type="checkbox" /> {/* add wrap option */}
                    <p> This order contains a gift</p>
                </div>
            </div>
        </div >
    )
}

export default Cart

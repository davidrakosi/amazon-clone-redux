import React from 'react'
import './Checkout.css'

import Address from './Address'
import Personal from './Personal'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkout__container">
                <h2>Add new address</h2>
                <div className="checkout__form">
                    <Personal />
                    <Address />
                </div>
                <div className="checkout__payment"></div>
                <div className="checkout__finalize">
                    <button className='amzButton'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout

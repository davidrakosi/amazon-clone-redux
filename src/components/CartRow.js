import React, { useState } from 'react'
import './CartRow.css'

import db from '../firebase'

import { useSelector } from 'react-redux'
import { selectUserEmail } from '../features/user/userSlice'

const CartRow = ({ img, name, price, quantity, id }) => {
    const [qty, setQty] = useState(quantity)

    console.log('DEBUG >>> ', qty)

    const userEmail = useSelector(selectUserEmail)

    const handleAmountChange = (e) => {
        db.collection('userData').doc(userEmail).collection('cartItems').doc(id).update({
            quantity: parseInt(qty)
        })
    }

    return (
        <div className='cartRow'>
            <div className="cartRow__container">
                <div className="cartRow--left">
                    <div className="cartRow__imageContainer">
                        <img src={img} alt={name} />
                    </div>
                    <div className="cartRow__info">
                        <h3>{name}</h3>
                        <p>In Stock</p>
                        <div className="cartRow__itemMgmt">
                            <div className="cartRow__amountSelect">
                                <p>Qty:</p>
                                <input type="number" value={qty} onChange={(e) => { setQty(e.target.value) }} />
                                <button onClick={handleAmountChange}>Update</button>
                            </div>
                            <p>|</p>
                            <button>Delete</button>
                            <p>|</p>
                            <button>Save for Later</button>
                        </div>
                    </div>
                </div>

                <div className="cartRow--right">
                    <strong>${price}</strong>
                </div>
            </div>
            <div className="cartRow__divider">
                <hr />
            </div>
        </div>
    )
}

export default CartRow

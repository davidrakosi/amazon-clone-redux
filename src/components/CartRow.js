import React from 'react'

const CartRow = ({ img, name, price, quantity }) => {

    return (
        <div className='cartRow'>
            <div className="cartRow--left">
                <div className="cartRow__imageContainer">
                    <img src={img} alt={name} />
                </div>
                <h3>{name}</h3>
                <p>In Stock</p>
                {/* quantity dropdown */}
                <h1>Quantity: {quantity}</h1>
            </div>

            <div className="cartRow--right">
                <strong>${price}</strong>
            </div>
        </div>
    )
}

export default CartRow

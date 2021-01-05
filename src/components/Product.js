import React from 'react'
import './Product.css'

const Product = ({ id, title, price, rating, image }) => {
    const addToCart = () => {

    }
    return (
        <div className='product'>
            <div className="product__info">

                <span>{title}</span>
                <span className="product__price">${price}</span>

                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>🌟</p>
                        ))
                    }
                </div>

                <img src={image} alt={title} />

                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}


export default Product

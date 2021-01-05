import React from 'react'
import './Product.css'

import db from '../firebase'

import { auth, provider } from '../firebase'

import { useSelector, useDispatch } from 'react-redux'
import { selectUserEmail, setUserLoginDetails } from '../features/user/userSlice'

const Product = ({ id, title, price, rating, image }) => {
    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)

    const forceAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setUserLoginDetails({
                name: result.user.displayName,
                email: result.user.email
            }))
        }).catch((err) => alert(err.message))
    }

    const addToCart = () => {
        if (userEmail) {
            db.collection('carts').doc(userEmail).collection('items').doc().set({
                name: title,
                price: price,
                image: image
            })

        } else {
            forceAuth()
        }
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

                <div className="product__image">
                    <img src={image} alt={title} />
                </div>

                <div className="product__button">
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


export default Product

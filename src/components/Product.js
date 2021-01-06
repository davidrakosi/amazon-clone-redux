import React, { useEffect, useState } from 'react'
import './Product.css'

import db from '../firebase'

import { auth, provider } from '../firebase'

import { useSelector, useDispatch } from 'react-redux'
import { selectUserEmail, setUserLoginDetails } from '../features/user/userSlice'

const Product = ({ id, title, price, rating, image }) => {
    const [inCart, setInCart] = useState(false)
    const [cartCounter, setCartCounter] = useState(0)

    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)

    useEffect(() => {
        userEmail && db.collection('carts').doc(userEmail).collection('items').onSnapshot(snapshot => {
            snapshot.docs.map(doc => {
                if (doc.id === id) {
                    setInCart(true)
                    setCartCounter(doc.data().quantity)
                }
            })

        })
    }, [userEmail])

    const forceAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setUserLoginDetails({
                name: result.user.displayName,
                email: result.user.email
            }))
        }).catch((err) => alert(err.message))
    }

    const addToCart = () => {
        userEmail ?
            inCart ?
                db.collection('carts').doc(userEmail).collection('items').doc(id).update({
                    quantity: cartCounter + 1
                }) : db.collection('carts').doc(userEmail).collection('items').doc(id).set({
                    name: title,
                    price: price,
                    image: image,
                    quantity: 1
                })
            : forceAuth()
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

import React, { useEffect } from "react";

import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";

import { auth, provider } from "../firebase";
import db from '../firebase'

import { useDispatch, useSelector } from "react-redux";
import {
    selectUserName,
    selectUserEmail,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice";

import {
    resetCart,
    setCartItemCount,
    selectCartItemsAmount
} from '../features/cart/cartSlice'

const Header = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
    const cartItemCount = useSelector(selectCartItemsAmount)

    useEffect(() => {
        let items = 0
        userName && db.collection('userData').doc(userEmail).collection('cartItems').onSnapshot(snapshot => {
            dispatch(resetCart())

            snapshot.docs.map(doc => {
                dispatch(setCartItemCount(doc.data().quantity))
            })
        })


    }, [userName])

    const handleAuth = () => {
        console.log('DEBUG >>> auth being handled')
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                dispatch(setUserLoginDetails({
                    name: result.user.displayName,
                    email: result.user.email
                }))
            }).catch((error) => {
                alert(error.message);
            });
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
            }).catch((err) => alert(err.message))
        }
    }
    const cartElement =
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span
                className="header__optionLineTwo header__basketCount">{cartItemCount}</span>
        </div>

    return (
        <div className='header'>
            <div className='header__main'>
                <Link to="/">
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt='Amazon Logo' />
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Deliver to</span>
                    <span className='header__optionLineTwo'>Los Angeles</span>
                </div>

                <div className='header__search'>
                    <input type='text' className='header__searchInput' />
                    <SearchIcon className="header__searchIcon" />
                </div>

                <div className='header__nav'>

                    <Link to='/login'>
                        <div className='header__option' onClick={handleAuth}>
                            {
                                userName ? (
                                    <>
                                        <span className='header__optionLineOne'>Hello {userName}</span>
                                        <span className='header__optionLineTwo'>Sign Out</span>
                                    </>
                                ) : (
                                        <>
                                            <span className='header__optionLineOne'>Guest</span>
                                            <span className='header__optionLineTwo'>Sign In</span>
                                        </>
                                    )
                            }
                        </div>
                    </Link>

                    <Link to='/orders'>
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>

                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                    {
                        userName ? (
                            <Link to='/cart'>
                                {cartElement}
                            </Link>
                        ) : (
                                <Link to='/'>
                                    {cartElement}
                                </Link>
                            )
                    }

                </div>
            </div>

            <div className='header__belt'>
                <div className='header__belt--left'>
                    <div className='header__beltItem'>
                        <MenuIcon />
                        All
                    </div>

                    <div className='header__beltItem'>
                        Today's Deals
                    </div>

                    <div className='header__beltItem'>
                        {userName ? (
                            <p>{`${userName}'s`} Amazon</p>
                        ) : (
                                <p>Your Amazon</p>
                            )}
                    </div>

                    <div className='header__beltItem'>
                        Customer Service
                    </div>

                    <div className='header__beltItem'>
                        Browsing History
                    </div>

                    <div className='header__beltItem'>
                        Buy Again
                        <ArrowDropDownIcon />
                    </div>

                    <div className='header__beltItem'>
                        Gift Cards
                    </div>

                    <div className='header__beltItem'>
                        Sell
                    </div>

                    <div className='header__beltItem'>
                        Registry
                    </div>
                </div>

                <div className='header__belt--right'>
                    <p>Amazon's response to COVID-19</p>
                </div>

            </div>


        </div>
    )
}

export default Header
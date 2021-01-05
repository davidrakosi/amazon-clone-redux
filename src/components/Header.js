import React from "react";

import './Header.css'
import SearchIcon from "@material-ui/icons/Search";

import {Link} from "react-router-dom";

import {auth, provider} from "../firebase";

import {useDispatch, useSelector} from "react-redux";
import {selectUserName, setUserLoginDetails, setSignOutState} from "../features/user/userSlice";

const Header = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

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
            auth.signOut()
            dispatch(setSignOutState())
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                     alt='Amazon Logo'/>
            </Link>

            <div className='header__option'>
                <span className='header__optionLineOne'>Deliver to</span>
                <span className='header__optionLineTwo'>Los Angeles</span>
            </div>

            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className="header__searchIcon"/>
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

            </div>
        </div>
    )
}

export default Header
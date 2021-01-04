import React from "react";

import {Link} from "react-router-dom";

const Header = () => {
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
            
        </div>
    )
}

export default Header
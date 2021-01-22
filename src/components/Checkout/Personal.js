import React from 'react'

import { useSelector } from 'react-redux'
import { selectUserName } from '../../features/user/userSlice'

const Personal = () => {
    const userName = useSelector(selectUserName)
    return (
        <div className='personal'>
            <div className="personal__name">
                <div className="personal__formElement">
                    <p className='personal__label'>Full name (First and Last name)</p>
                    <input type="text" className='address__input' value={userName} />
                </div>
            </div>
            <div className="personal__cell">
                <div className="personal__formElement">
                    <p className='personal__label'>Phone number</p>
                    <input type="text" className='address__input' />
                </div>
            </div>
        </div>
    )
}

export default Personal

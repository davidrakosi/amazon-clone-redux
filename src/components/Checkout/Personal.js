import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectOrderName, selectOrderPhone, setOrderName, setOrderPhone } from '../../features/order/orderForm'
import { selectUserName } from '../../features/user/userSlice'

const Personal = () => {
    const orderName = useSelector(selectOrderName)
    const orderPhone = useSelector(selectOrderPhone)

    const userName = useSelector(selectUserName)

    useEffect(() => dispatch(setOrderName(userName)), [userName])

    const dispatch = useDispatch()

    return (
        <div className='personal'>
            <div className="personal__name">
                <div className="personal__formElement">
                    <p className='personal__label'>Full name (First and Last name)</p>
                    <input type="text" className='personal__input' value={orderName} onChange={e => dispatch(setOrderName(e.target.value))} />
                </div>
            </div>
            <div className="personal__cell">
                <div className="personal__formElement">
                    <p className='personal__label'>Phone number</p>
                    <input type="text" className='personal__input' value={orderPhone} onChange={e => dispatch(setOrderPhone(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default Personal
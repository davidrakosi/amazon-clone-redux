import React, {useEffect, useState} from 'react'
import './Home.css'

import db from '../firebase'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection('products').onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className='home'>
            <div className='home__container'>
                <div className="home__banner"
                     style={{
                         backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg)'
                     }}
                >
                </div>

                <div className='home__main'>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
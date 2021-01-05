import React, { useEffect, useState } from 'react'
import './Home.css'

import db from '../firebase'
import Product from "./Product";

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
                    <div className='home__row'>
                        {
                            products.slice(0, 2).map(({ id, item }) => (
                                <Product
                                    id={id}
                                    title={item.name}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>

                    <div className='home__row'>
                        {
                            products.slice(2, products.length).map(({ id, item }) => (
                                <Product
                                    id={id}
                                    title={item.name}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
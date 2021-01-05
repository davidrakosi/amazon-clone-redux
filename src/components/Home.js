import React from 'react'
import './Home.css'

const Home = () => {

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
                    {/*    products go here*/}
                </div>
            </div>
        </div>
    )
}

export default Home
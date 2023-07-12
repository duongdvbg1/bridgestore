import React from 'react';
import { Link } from 'react-router-dom';

const TrendingProduct = () => {
    return (
        <div className='trendingProducts'>
            <div className="container">
                <div className="head-title">
                    <h2>
                        Trending Product
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <Link to="/" className='seeAll'>
                        See all products
                    </Link>
                </div>
                <div className="tabs"></div>
            </div>
        </div>
    )
}

export default TrendingProduct

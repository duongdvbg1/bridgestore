import React from 'react';
import { Link } from 'react-router-dom';
import './paralax.scss';

const Paralax = () => {
    return (
        <div className='bannerContent'>
            <div className="paralax paralax1">
                <div className="container">
                    <div className="bannerDes">
                        <h5>
                            <span>Our featured offers</span>
                        </h5>
                        <h3>
                            Own the latest <span>iPhone XS</span>
                        </h3>
                        <p>
                            <Link to="/" className="visitStore btn">Visit Store</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="paralax paralax2">
                <div className="container">
                    <div className="posDes">
                        <div className="bannerDes">
                            <h5>
                                <span>New in store</span>
                            </h5>
                            <h3>
                                Save 20% on <span>Google Speakers</span>
                            </h3>
                            <p>
                                <Link to="/" className="visitStore btn">Visit Store</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paralax

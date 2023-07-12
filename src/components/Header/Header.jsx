import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import './TopBar';
import TopBar from './TopBar';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useClickOutside from '../../utils/outsideClick';
import img1 from '../../assets/product/product-img-1.jpg';

library.add(faCartShopping, faMagnifyingGlass);

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const innerRef = useClickOutside(e => {
        setToggle(false);
    })

    return (
        <header>
            <TopBar />
            <div className="header">
                <div className="container">
                    <div className="headerInner">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="menuNav">
                            <ul className="navItem">
                                <li className="menuItem">
                                    <Link to="/" className="item">Home</Link>
                                </li>
                                <li className="menuItem">
                                    <Link to="/" className="item">Products</Link>
                                </li>
                                <li className="menuItem">
                                    <Link to="/" className="item">Support</Link>
                                </li>
                                <li className="menuItem">
                                    <Link to="/" className="item">News</Link>
                                </li>
                                <li className="menuItem">
                                    <Link to="/" className="item">Locations</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="headerRight">
                            <div className="headerSearch">
                                <Link to="/" className='cartIcon' >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Link>
                            </div>

                            <div className="headerCart" ref={innerRef}>
                                <Link to="/" className='cartIcon'  onClick={()=> setToggle(!toggle)}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className="count">1</span>
                                </Link>
                                { toggle && (
                                    <div className="miniCart">
                                        <div className="listMiniCart">
                                            <div className="cartItem">
                                                <div className="cartImg">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <div className="cartDetails">
                                                    <div className="cartName">Apple - MacBook Pro® - 13" Display - Intel Core i5 - 8 GB Memory</div>
                                                    <div className="qtyPrice">
                                                        <span className="qty">1</span>
                                                        <span className="or"> x </span>
                                                        <span className="price">$34.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cartItem">
                                                <div className="cartImg">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <div className="cartDetails">
                                                    <div className="cartName">Apple - MacBook Pro® - 13" Display - Intel Core i5 - 8 GB Memory</div>
                                                    <div className="qtyPrice">
                                                        <span className="qty">1</span>
                                                        <span className="or"> x </span>
                                                        <span className="price">$34.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cartBottom">
                                            <div className="actions">
                                                <Link to="/cart" className='cartBtn' >
                                                    Cart
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </Link>
                                            </div>
                                            <div className="cartTotal">
                                                <span className="label">Totals: </span>
                                                <span className="totals">$1,1289.99</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

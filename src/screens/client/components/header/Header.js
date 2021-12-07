import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../../images/logo.png'

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-main">
                    <div className="header-top">
                        <div className="header-grid">
                            <div className="header-logo">
                                <Link to="#">
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                            <div className="header-search">
                                <input type="text" placeholder="Search the store" />
                                <button type="submit">Search</button>
                            </div>
                            <div className="header-user">
                                <div className="user-item user-auth">
                                    <div className="item-icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="item-content">
                                        <p>My Account</p>
                                    </div>
                                </div>
                                <div className="user-item user-cart">
                                    <div className="item-icon">
                                        <i className="fas fa-shopping-cart"></i>	
                                    </div>
                                    <div className="item-content">
                                        <Link to="cart">
                                            <span>My Cart</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="header-grid">
                            <div className="header-category">
                                <span>all categories</span>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className="header-menu">
                                <ul className="menu-list">
                                    <li className="menu-item"><Link to="shop">Shop</Link></li>
                                    <li className="menu-item"><Link to="#">Home</Link></li>
                                    <li className="menu-item"><Link to="#">Blogs</Link></li>
                                    <li className="menu-item"><Link to="#">Contact Us</Link></li>
                                    <li className="menu-item"><Link to="#">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import './Header.css';
import Logo from '../images/logo.png'

export const Header = () => {
    return (
        <div class="header">
            <div class="container">
                <div class="header-main">
                    <div class="header-top">
                        <div class="header-grid">
                            <div class="header-logo">
                                <a href="#">
                                    <img src={Logo} alt="" />
                                </a>
                            </div>
                            <div class="header-search">
                                <input type="text" placeholder="Search the store" />
                                <button type="submit">Search</button>
                            </div>
                            <div class="header-user">
                                <div class="user-item user-auth">
                                    <div class="item-icon">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="item-content">
                                        <p>My Account</p>
                                    </div>
                                </div>
                                <div class="user-item user-cart">
                                    <div class="item-icon">
                                        <i class="fas fa-shopping-cart"></i>	
                                    </div>
                                    <div class="item-content">
                                        <p>My Cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-bottom">
                        <div class="header-grid">
                            <div class="header-category">
                                <span>all categories</span>
                                <i class="fas fa-bars"></i>
                            </div>
                            <div class="header-menu">
                                <ul class="menu-list">
                                    <li class="menu-item"><a href="#">Home</a></li>
                                    <li class="menu-item"><a href="#">Shop</a></li>
                                    <li class="menu-item"><a href="#">Blogs</a></li>
                                    <li class="menu-item"><a href="#">Contact Us</a></li>
                                    <li class="menu-item"><a href="#">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

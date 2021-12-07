import "./Footer.css"
import Logo from '../../images/logo.png'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-infor">
                        <a href="">
                            <img src={Logo} alt="" />
                        </a>
                        <div className="footer-list">
                            <div className="infor-phone">
                                <span>Hotline Free 24/24</span>
                                <br/>
                                <a href="tel:(1800)-000-6890"> (1800)-000-6890 </a>  
                            </div>
                            <p>
                                Address : Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America
                            </p>
                            <p>
                                Email: <a href="mailto:contact@ibigecommerce.com">contact@ibigecommerce.com</a>
                            </p>
                        </div>
                        <div className="footer-social">
                            <ul>
                                <li className="facebook"><i className="fab fa-facebook-f"></i></li>
                                <li className="twitter"><i className="fab fa-twitter"></i></li>
                                <li className="instagram"><i className="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-page">
                        <span className="footer-title">Information</span>
                        <ul className="footer-list">
                            <li><a href="">Blog</a></li>
                            <li><a href="">Page</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Buy theme now</a></li>
                            <li><a href="">RSS Syndication</a></li>
                            <li><a href="">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="footer-brands">
                        <span className="footer-title">Information</span>
                        <ul className="footer-list">
                            <li><a href="">Common Good</a></li>
                            <li><a href="">OFS</a></li>
                            <li><a href="">Safaform</a></li>
                            <li><a href="">Vulputate velit</a></li>
                            <li><a href="">Feugiat nulla</a></li>
                            <li><a href="">View All</a></li>
                        </ul>
                    </div>
                    <div className="footer-categories">
                        <span className="footer-title">All Categories</span>
                        <ul className="footer-list">
                            <li><a href="">Electronic & Digital</a></li>
                            <li><a href="">Health & Beauty</a></li>
                            <li><a href="">Top 10 Offers</a></li>
                            <li><a href="">Home & Kitchen</a></li>
                            <li><a href="">Smartphones & Tablets</a></li>
                            <li><a href="">View All</a></li>
                        </ul>				
                    </div>
                    <div className="footer-newsletter">
                        <span className="footer-title">Sign Up For Newsletter</span>
                        <div className="footer-list">
                            <p>Get the latest updates on new products and upcoming sales</p>
                            <form action="">
                                <input type="text" placeholder="Your Email Address"/>
                                <span type="submit" className="btn">SUBCRIBE</span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



import './Shop.css';
import Laptop from '../images/laptop.png'
import Iphone from '../images/iphone.png'

export const Shop = () => {
    return (
        <div className="container">
			<div className="shop">
				<div className="shop-sidebar">
					<div className="sidebar-block">
						<p className="sidebar-title">all categories</p>
						<ul className="sidebar-content">
							<li className="sidebar-item">Electroic & Digital</li>
							<li className="sidebar-item">Health & Beauty</li>
							<li className="sidebar-item">Home & Kitchen</li>
							<li className="sidebar-item">Smartphone & Tablets</li>
							<li className="sidebar-item">Jewelry & Watches</li>
							<li className="sidebar-item">Book & Office</li>
							<li className="sidebar-item">Cameras & Camcorders</li>
							<li className="sidebar-item">Video Games & Systems</li>
						</ul>
					</div>
					<div className="sidebar-block">
						<p className="sidebar-title">Refine by</p>
						<ul className="sidebar-content">
							<li className="sidebar-item">Electroic & Digital</li>
							<li className="sidebar-item">Health & Beauty</li>
							<li className="sidebar-item">Home & Kitchen</li>
							<li className="sidebar-item">Smartphone & Tablets</li>
							<li className="sidebar-item">Book & Office</li>
						</ul>
					</div>
				</div>
				<div className="shop-content">
					<div className="product-list">
						<div className="product">
							<img src={Iphone} alt="" />
							<div className="product-content">
								<p className="product-name">Consetetur sadipscing elitr sadipscing</p>
								<p className="product-price">$200.00</p>
								<div className="btn btn-product">
									<span>Add To Cart</span>
								</div>
							</div>
							<div className="product-icon">
								<a href="">
									<i className="fas fa-search"></i>
								</a>
							</div>
						</div>
						<div className="product">
							<img src={Laptop} alt="" />
							<div className="product-content">
								<p className="product-name">Consetetur sadipscing elitr sadipscing</p>
								<p className="product-price">$200.00</p>
								<div className="btn btn-product">
									<span>Add To Cart</span>
								</div>
							</div>
							<div className="product-icon">
								<a href="">
									<i className="fas fa-search"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

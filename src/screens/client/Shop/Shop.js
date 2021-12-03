import { useEffect, useState } from 'react'
import { getAll } from '../../../api/product';

import { Product } from '../product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function getProducts() {
			const { data } = await getAll()
			setProducts(data)
		}

		getProducts()
	}, [])

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
						{products.data && products.data.map(product => {
							return <Product {...product} />
						})}
					</div>
				</div>
			</div>
		</div>
    )
}

export default Shop
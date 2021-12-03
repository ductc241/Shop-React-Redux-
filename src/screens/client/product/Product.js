import React from 'react'
import { Link } from 'react-router-dom'

import Laptop from '../images/laptop.png'
import './Product.css'

export const Product = (props) => {
    console.log(props)
    return (
        <div className="product">
            <img src={Laptop} alt="" />
            <div className="product-content">
                <p className="product-name">{props.name}</p>
                <p className="product-price">${props.price}</p>
                <div className="btn btn-product">
                    <span>Add To Cart</span>
                </div>
            </div>
            <div className="product-icon">
                <Link to="">
                    <i className="fas fa-search"></i>
                </Link>
            </div>
        </div>
    )
}

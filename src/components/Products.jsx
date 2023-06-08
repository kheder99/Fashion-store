import React from 'react';
import {RiHeart3Fill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import GoToTop from './GoToTop';
import products from '../data.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Products() {
    console.log(products[0].src);
    return (
        <div className="products">
            <div className='container'>
                <h2 className='title'>Popular Products</h2>
                <div className="products-list">
                    {
                        products.map((product,index) => {
                                return <div className="product-card" key={index}>
                                            <NavLink to={`product/${product.id}`} >
                                                <LazyLoadImage key={product.id} src={product.src} className="card-img" alt="background" width="90%" height="25em" effect="blur" placeholderSrc={product.src}/>
                                            </NavLink>
                                            <div className="card-img-overlay ">
                                                <NavLink to={`product/${product.id}`} >
                                                    <h3 className="product-name">{product.name}</h3>
                                                </NavLink>
                                                <div className="details">
                                                <p className="product-price">${product.price}</p>
                                                <p className='active-heart'>
                                                    <RiHeart3Fill />
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                        })
                    }
                </div>
            </div>
            <GoToTop />
        </div>
    )
}

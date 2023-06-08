import React from 'react';
import slides from '../slides';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function SpecialForYou() {
    return (
        <div className="special-for-you">
            <div className='container'>
                <h2 className='title'>Special for you</h2>
                <div className="list">
                    {
                        slides.map((slide,index) => {
                            return <div className="sfy-card" key={index}>
                                        <LazyLoadImage src={slide.src} className="card-img" alt="background" height="auto" width="100%" effect='blur' placeholderSrc={slide.src}/>
                                        <div className="card-img-overlay ">
                                            <h2 className="card-title">{slide.title}</h2>
                                            <p className="card-text ">{slide.brands} Brands</p>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

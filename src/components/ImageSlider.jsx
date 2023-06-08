import React from 'react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageSlider({slides,isOpen,notification,turnoff}) {
    const[currentIndex,setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex===0
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex===slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        const newIndex = slideIndex;
        setCurrentIndex(newIndex);
    }
    console.log(slides[currentIndex].src);
    return (
        <div className='hero' onClick={isOpen || notification ? turnoff : null}>
            <div className="container">
                <div className="card ">
                    <div className='left-angel-arrow-pointer' onClick={goToPrevious}>&#10096;</div>
                    <div className='right-angel-arrow-pointer' onClick={goToNext}>&#10097;</div>
                    <LazyLoadImage src={slides[currentIndex].src} className="card-img" alt="background" height="550px" width="100%" effect='blur' placeholderSrc={slides[currentIndex].src} />
                    <div className="card-img-overlay ">
                        <h2 className="card-title">Ramadan Offer</h2>
                        <p className="card-text ">25% for any product</p>
                    </div>
                </div>
                <div className='dots-list'>
                    {slides.map((slide,slideIndex) => (
                        <div key={slideIndex} className={currentIndex ===slideIndex ?'dots active':'dots'} onClick={()=> goToSlide(slideIndex)}>	&#9679;	</div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

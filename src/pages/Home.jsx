import React from 'react';
import Categories from '../components/Categories';
import ImageSlider from '../components/ImageSlider';
import Products from '../components/Products';
import SpecialForYou from '../components/SpecialForYou';
import img1 from '../images/E-commerce-Bg.jfif';
import img2 from '../images/E-commerce-Bg2.jpg';
import img3 from '../images/E-commerce-Bg5.jfif';

import GoToTop from '../components/GoToTop';


export default function Home({isOpen,notification,turnoff}) {
    const bannerSlides = [
        {src: img1, title: 'Smartphone', brands: 18},
        {src: img2, title: 'Fashion', brands: 24},
        {src: img3, title: 'jewelry', brands: 10}
    ];
    return (
        <>
            <ImageSlider slides={bannerSlides} isOpen={isOpen} notification={notification} turnoff={turnoff} />
            <Categories />
            <SpecialForYou />
            <Products />
            <GoToTop />
        </>
    );
}

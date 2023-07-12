import React from 'react';
import Header from '../components/Header/Header';
import BannerSlider from '../components/BannerSlider/BannerSlider';
import TrendingProduct from '../components/TrendingProduct/';
import Paralax from '../components/Paralax';
import Blogs from '../components/Blogs';
import TrendingCategories from '../components/TrendingCategories';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
			<BannerSlider />
			<TrendingProduct />
			<Paralax />
			<Blogs />
			<TrendingCategories />
			<Footer />
        </>
    )
}

export default Home

import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OurBrands from '../OurBrands/OurBrands';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            <Reviews />
            <OurBrands />
            <Footer />
        </div>
    );
};

export default Home;
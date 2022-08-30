import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;
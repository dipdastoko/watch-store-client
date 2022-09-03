import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Product from '../Home/Products/Product';

const Explore = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homeproducts?page=explore')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, []);
    return (
        <div>
            <Navbar />
            <Typography variant='h3' sx={{ fontFamily: 'initial' }}>All Products</Typography>
            <hr style={{ margin: '0 25%' }} />

            <Grid sx={{ mt: 5 }} container>
                {
                    allProducts.map(product => <Product
                        key={product.name}
                        product={product}
                    />)
                }
            </Grid>
            <Footer />
        </div>
    );
};

export default Explore;
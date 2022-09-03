import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';

const Products = () => {
    const [homePageProducts, setHomePageProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homeproducts?page=home')
            .then(res => res.json())
            .then(data => setHomePageProducts(data));
    }, []);
    return (
        <div>
            <Typography variant='h3' sx={{ fontFamily: 'initial' }}>Our Products</Typography>
            <hr style={{ margin: '0 25%' }} />

            <Grid sx={{ mt: 5 }} container>
                {
                    homePageProducts.map(product => <Product
                        key={product.name}
                        product={product}
                    />)
                }
            </Grid>
        </div>
    );
};

export default Products;
import { Grid, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const homePageProducts = useProducts('home');
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
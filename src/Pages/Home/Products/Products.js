import { Grid, Typography } from '@mui/material';
import React from 'react';
import Product from './Product';

const products = [
    {
        name: 'Alexandre Christie',
        img: 'https://i.ibb.co/554fJbX/Alexandre-Christie.png',
        shortDescription: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
        price: '100'
    },
    {
        name: 'Brown Black Belt',
        img: 'https://i.ibb.co/35xYDSw/Brown-Black-Belt.png',
        shortDescription: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
        price: '100'
    },
    {
        name: 'Festina Analog',
        img: 'https://i.ibb.co/JdC4N2H/Festina-Analog.png',
        shortDescription: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
        price: '100'
    },
    {
        name: 'Fossil 10 ATM',
        img: 'https://i.ibb.co/mGtC15D/Fossil-10-ATM.png',
        shortDescription: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
        price: '100'
    },
    {
        name: 'Fossil Brown Leather',
        img: 'https://i.ibb.co/bzK6h2V/Fossil-Brown-Leather.png',
        shortDescription: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
        price: '100'
    },
    {
        name: 'IWC Brown Leather',
        img: 'https://i.ibb.co/mNGKXZy/IWC-Brown-Leather-Watch.png',
        shortDescription: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
        price: '100'
    }
]

const Products = () => {
    return (
        <div>
            <Typography variant='h3' sx={{ fontFamily: 'initial' }}>Our Products</Typography>
            <hr style={{ margin: '0 25%' }} />

            <Grid sx={{ mt: 5, }} container>
                {
                    products.map(product => <Product
                        key={product.name}
                        product={product}
                    />)
                }
            </Grid>
        </div>
    );
};

export default Products;

/* 
https://i.ibb.co/554fJbX/Alexandre-Christie.png
https://i.ibb.co/35xYDSw/Brown-Black-Belt.png
https://i.ibb.co/JdC4N2H/Festina-Analog.png
https://i.ibb.co/mGtC15D/Fossil-10-ATM.png
https://i.ibb.co/bzK6h2V/Fossil-Brown-Leather.png
https://i.ibb.co/mNGKXZy/IWC-Brown-Leather-Watch.png
https://i.ibb.co/NmcPrfd/Omega-Seamaster.png
https://i.ibb.co/2jknzY1/Rolex-Oyster-Perpetual.png
https://i.ibb.co/8dffggs/Seiko-Automatic-23-Jwels.png
https://i.ibb.co/ZcHkXx9/Tissot-1853.png
*/
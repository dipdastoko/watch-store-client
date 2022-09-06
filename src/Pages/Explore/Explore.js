import { Grid, Typography } from '@mui/material';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Product from '../Home/Products/Product';

const Explore = () => {
    const allProducts = useProducts('all');
    return (
        <div>
            <Navbar />
            <Typography variant='h3' sx={{ fontFamily: 'initial' }}>All Products</Typography>
            <hr style={{ margin: '0 25%' }} />

            <Grid sx={{ mt: 5 }} container>
                {
                    allProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </Grid>
            <Footer />
        </div>
    );
};

export default Explore;
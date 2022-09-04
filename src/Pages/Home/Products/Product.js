import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, shortDescription, price, _id } = product;
    const url = `/purchasenow/${_id}`
    return (
        <Grid sx={{ mb: 5 }} item={true} xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345, ml: 5 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shortDescription}
                    </Typography>
                    <br />
                    <Typography sx={{ fontWeight: 'bold' }} variant='overline'>
                        Price: {price}tk
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Link to={url} style={{ textDecoration: 'none' }}><Button size="small">Purchase Now</Button></Link>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Product;
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Product = ({ product }) => {
    const { name, img, shortDescription, price } = product;
    return (
        <Grid sx={{ mb: 5 }} xs={12} md={6} lg={4}>
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
                    <Button size="small">Purchase Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;
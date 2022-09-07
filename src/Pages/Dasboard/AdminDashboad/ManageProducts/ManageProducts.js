import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogTitle, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import useProducts from '../../../../Hooks/useProducts';

const ManageProducts = () => {
    const [open, setOpen] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false);
    const [productId, setProductId] = useState('');

    const handleRemoveProduct = id => {
        fetch(`https://polar-citadel-78881.herokuapp.com/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsCanceled(true);
                }
            })
    }

    const handleClose = () => {
        setOpen(false);
    };

    const allProducts = useProducts('all', isCanceled);

    console.log('hello hello');

    return (
        <div>
            <h2>Manage Products</h2>
            <Grid container spacing={2}>
                {
                    allProducts.map(product =>
                        <Grid key={product._id} item xs={12} md={6} lg={4}>
                            <Card sx={{ maxWidth: 345, my: 3 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product?.img}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div">
                                        {product?.name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {product?.shortDescription}
                                    </Typography>

                                    <br />
                                    <Typography sx={{ fontWeight: 'bold' }} variant='overline'>
                                        Price: {product?.price}tk
                                    </Typography>

                                </CardContent>

                                <CardActions sx={{ justifyContent: 'center' }}
                                >
                                    <Button onClick={() => {
                                        setOpen(true);
                                        setProductId(product._id);
                                    }} size="small">Remove Product</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"Remove Product? Click 'Yes' to confirm"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => {
                        handleRemoveProduct(productId);
                        handleClose();
                        setIsCanceled(false);
                    }}>
                        Yes
                    </Button>

                    <Button onClick={() => {
                        handleClose();
                    }}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ManageProducts;
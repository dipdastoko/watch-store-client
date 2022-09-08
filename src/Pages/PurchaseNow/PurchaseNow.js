import { Alert, Button, Collapse, Dialog, DialogActions, DialogTitle, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import Navbar from '../Home/Navbar/Navbar';

const PurchaseNow = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [open, setOpen] = useState(true);

    const [openDialog, setOpenDialog] = useState(false);
    const handleClose = () => {
        setOpenDialog(false);
    };


    const { productId } = useParams();
    const allProducts = useProducts('all');

    const selectedProduct = allProducts.find(product => product._id === productId);

    const { user } = useAuth();

    const [orderDetails, setOrderDetails] = useState({
        name: user.displayName,
        email: user.email,
        phone: '',
        address: '',
    });


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderDetails = { ...orderDetails };
        newOrderDetails[field] = value;
        setOrderDetails(newOrderDetails);
    };

    const [order, setOrder] = useState({});

    const handlePlaceOrder = e => {

        setOpen(true);

        const order = { ...orderDetails, productName: selectedProduct.name, price: selectedProduct.price, img: selectedProduct.img, status: 'Pending' };

        setOrder(order);

        e.preventDefault();
    };

    const placeOrder = () => {
        fetch('https://polar-citadel-78881.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlertMessage('success');
                    orderDetails.phone = '';
                    orderDetails.address = '';
                }
                else {
                    setAlertMessage('error')
                }
            });
    }


    return (
        <Box>
            <Navbar />
            <br />
            {
                alertMessage === 'success' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="success">Order Placed successfully!</Alert>
                </Collapse>
            }
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                {/* product information starts */}
                <Grid item xs={12} md={6} >
                    <Paper sx={{ mx: 2, ml: 4 }} elevation={3}>
                        <Typography variant='h5' sx={{ mt: 2 }}>

                            <span style={{ color: 'slateblue' }}>Product Information</span>
                        </Typography>

                        <Divider sx={{ mb: 1 }} />

                        <Typography variant='h5' sx={{ mt: 2 }}>
                            {selectedProduct?.name}
                        </Typography>

                        <br />
                        <img style={{ width: '300px' }} src={selectedProduct?.img} alt="" />
                        <br />

                        <Typography sx={{ textAlign: 'justify', mx: 2 }} variant='body1'>
                            {selectedProduct?.shortDescription}
                        </Typography>

                        <Typography variant='h6'>
                            Price: {selectedProduct?.price}tk
                        </Typography>
                    </Paper>
                </Grid>
                {/* product information ends */}

                {/* order details starts */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ mx: 2 }} elevation={3}>
                        <Typography variant='h5' sx={{ mt: 2 }}>
                            <span style={{ color: 'seagreen' }}>Order Details</span>
                        </Typography>

                        <Divider />
                        <br />

                        <form onSubmit={(e) => {
                            handlePlaceOrder(e);
                            setOpenDialog(true);
                        }}>
                            {
                                selectedProduct?.name &&
                                <TextField
                                    sx={{ width: 300 }}
                                    variant='outlined'
                                    label='Product Name'
                                    name='productName'
                                    defaultValue={selectedProduct.name}
                                    onBlur={handleOnBlur}
                                    disabled
                                />
                            }

                            <br /><br />
                            <TextField
                                sx={{ width: 300 }}
                                variant='outlined'
                                label='Name'
                                name='name'
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                required
                            />

                            <br /><br />
                            <TextField
                                sx={{ width: 300 }}
                                variant='outlined'
                                label='Email'
                                name='email'
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                disabled
                            />

                            <br /><br />
                            <TextField
                                sx={{ width: 300 }}
                                variant='outlined'
                                label='Phone'
                                name='phone'
                                onBlur={handleOnBlur}
                                required
                            />

                            <br /><br />
                            <TextField
                                sx={{ width: 300 }}
                                variant='outlined'
                                label='Address'
                                name='address'
                                onBlur={handleOnBlur}
                                required
                            />
                            <br /><br />
                            <Button sx={{ mb: 3 }} variant='contained' type='submit'>Place Order</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>

            {/* confirmation dialouge */}
            <Dialog
                open={openDialog}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"Confirm Order? Click 'Yes' to confirm"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => {
                        placeOrder();
                        handleClose();
                    }}>Yes</Button>
                    <Button onClick={() => {
                        handleClose();
                    }}>No</Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
};

export default PurchaseNow;
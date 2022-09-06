import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [isCanceled, setIsCanceled] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const deleteOrder = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsCanceled(true);
                }
            });
    };


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [isCanceled]);
    return (
        <div>
            <h2>Manage All Orders</h2>
            <Grid container spacing={2}>
                {
                    orders.map(order => <Grid
                        key={order._id}
                        item
                        xs={12} md={6}
                    >
                        <Paper>
                            <Typography variant='h6'>{order.productName}</Typography>
                            <br />
                            <img style={{ width: 300 }} src={order.img} alt="" />
                            <br />
                            <Typography variant='subtitle1'>
                                Name: {order.name}
                            </Typography>
                            <Typography variant='subtitle1'>
                                Email: {order.email}
                            </Typography>
                            <Typography variant='subtitle1'>
                                Address: {order.address}
                            </Typography>

                            <Typography variant='subtitle2' sx={{ mt: 1 }}>Current Status: {order.status}</Typography>
                            <Button onClick={() => {
                                setOpen(true);
                                setOrderId(order._id);

                            }}>Revmove Order</Button>
                        </Paper>

                    </Grid>)
                }

            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"Are you sure to remove the order?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => {
                        deleteOrder(orderId);
                        handleClose();
                    }}>Yes</Button>
                    <Button onClick={() => {
                        handleClose();
                    }}>No</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default ManageAllOrders;
import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [open, setOpen] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        fetch(`https://watch-store-server-hqwm.onrender.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
        setIsCanceled(false);
    }, [user.email, isCanceled]);

    const deleteOrder = id => {
        fetch(`https://watch-store-server-hqwm.onrender.com/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsCanceled(true);
                }
            });
    };

    if (orders.length === 0) {
        return <Typography variant='h4'>You have not placed any order yet.</Typography>
    };

    return (
        <div>
            <h2>My Orders</h2>
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
                            <Typography>
                                Price: {order.price}tk
                            </Typography>
                            <Typography variant='subtitle2'>Current Status: {order.status}</Typography>
                            <Button onClick={() => {
                                setOpen(true);
                                setOrderId(order._id);
                            }}>Cancel Order</Button>
                        </Paper>

                    </Grid>)
                }

            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"Cancel Order? Click 'Yes' to confirm"}
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

export default MyOrders;
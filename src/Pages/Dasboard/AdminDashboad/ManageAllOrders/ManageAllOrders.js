import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [isCanceledOrUpdated, setIsCanceledOrUpdated] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const handleClose = () => {
        setOpen(false);
        setIsCanceledOrUpdated(false);
    };

    useEffect(() => {
        fetch('https://watch-store-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [isCanceledOrUpdated]);

    const removeOrUpdateOrder = (id, method) => {
        fetch(`https://watch-store-server.vercel.app/order/${id}`, {
            method: `${method}`
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsCanceledOrUpdated(true);
                }
                if (data.modifiedCount) {
                    setIsCanceledOrUpdated(true);
                }
            });
    };


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

                            <Typography variant='subtitle2' sx={{ my: 1 }}>Current Status: {order.status}</Typography>

                            <Button onClick={() => {
                                setOpen(true);
                                setOrderId(order._id);
                                setAlertMessage('update');

                            }}>
                                Update Status
                            </Button>
                            <br />
                            <Button onClick={() => {
                                setOpen(true);
                                setOrderId(order._id);
                                setAlertMessage('remove');
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
                    {alertMessage === 'remove' ? "Are you sure to remove the order?" : 'Procced for shipping?'}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => {
                        if (alertMessage === 'remove') {
                            removeOrUpdateOrder(orderId, 'DELETE');
                        }
                        else {
                            removeOrUpdateOrder(orderId, 'PUT');
                        }
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
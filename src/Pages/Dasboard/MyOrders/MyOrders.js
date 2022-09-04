import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);

    const handleCancelOrder = () => {
        alert('cancel order');
    }
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
                            <Button onClick={handleCancelOrder}>Cancel Order</Button>
                        </Paper>
                    </Grid>)
                }

            </Grid>
        </div>
    );
};

export default MyOrders;
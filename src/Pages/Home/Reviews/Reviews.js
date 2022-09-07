import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://polar-citadel-78881.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <Box sx={{ ml: 5 }}>
            <Typography variant='h3' sx={{ fontFamily: 'initial', textAlign: 'left' }}>Reviews</Typography>
            <Divider sx={{ width: '300px' }} />
            <Grid sx={{ my: 2 }} container spacing={2}>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </Grid>
        </Box>
    );
};

export default Reviews;
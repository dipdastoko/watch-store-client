import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Reviews = () => {
    return (
        <Box sx={{ ml: 5 }}>
            <Typography variant='h3' sx={{ fontFamily: 'initial', textAlign: 'left' }}>Reviews</Typography>
            <Divider sx={{ width: '300px' }} />
        </Box>
    );
};

export default Reviews;
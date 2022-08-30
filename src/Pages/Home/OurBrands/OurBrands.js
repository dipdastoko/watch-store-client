import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import brandLogo from '../../../Images/BrandLogo/brandlogo.jpg';

const OurBrands = () => {
    return (
        <Box sx={{ ml: 5 }}>
            <Typography variant='h3' sx={{ fontFamily: 'initial', textAlign: 'left' }}>Our Brands
            </Typography>
            <Divider sx={{ width: '300px' }} />
            <br />
            <img style={{ width: '100%', height: '400px' }} src={brandLogo} alt="" />
        </Box>
    );
};

export default OurBrands;
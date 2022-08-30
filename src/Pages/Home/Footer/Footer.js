import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMapMarkerAlt, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Stack sx={{ justifyContent: 'center', color: 'white', backgroundColor: 'black', p: 5, mt: 3 }} direction="row" spacing={5}>
                <Stack spacing={2}>
                    <Typography variant='h4'>Our Services</Typography>
                    <Typography variant='overline'>About Our Services</Typography>
                    <Typography variant='overline'>Return & Refund</Typography>
                    <Typography variant='overline'>Terms & Conditions</Typography>
                    <Typography variant='overline'>Privacy Policy</Typography>
                </Stack>

                <Stack spacing={2}>
                    <Typography variant='h4'>Contact Us</Typography>
                    <Typography variant='overline'>
                        <span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faMobile} /> </span>
                        +85647891347</Typography>
                    <Typography variant='overline'><span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faMapMarkerAlt} /> </span> Baridhara DOHS,Dhaka</Typography>
                    <Typography variant='caption'><span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faAt} /> </span> watchonline@mail.com</Typography>
                </Stack>

                <Stack spacing={2}>
                    <Typography variant='h4'>Follow Us</Typography>
                    <span style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faFacebook} /> </span>
                    <span style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faTwitter} /> </span>
                    <span style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faInstagram} /> </span>
                </Stack>

            </Stack>
        </Box>
    );
};

export default Footer;
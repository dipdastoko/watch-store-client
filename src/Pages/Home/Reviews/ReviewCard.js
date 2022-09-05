import { Avatar, Divider, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewCard = (props) => {
    const { name, reviewText, date, rating } = props.review;
    return (

        <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ height: 200, backgroundColor: 'blanchedalmond' }} elevation={3}>
                <Grid container spacing={1} sx={{ p: 1 }} justifyContent='start'  >
                    <Grid container item xs={6}>
                        <Grid item xs={6}>
                            <Avatar src='' ></Avatar>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ mt: 1 }}>
                                {name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} >
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            readOnly
                        />
                        <br />
                        <Typography >
                            {date}
                        </Typography>
                    </Grid>

                </Grid>
                <Divider />
                <Typography sx={{ p: 1, textAlign: 'justify', height: 90, overflow: 'hidden' }} variant='body1'>{reviewText}</Typography>
            </Paper>
        </Grid>

    );
};

export default ReviewCard;
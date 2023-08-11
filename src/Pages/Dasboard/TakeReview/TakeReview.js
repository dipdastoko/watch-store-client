import { Alert, Button, Collapse, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const TakeReview = () => {
    const [value, setValue] = useState(0);
    const [reviewText, setReviewText] = useState();
    const [isSuccess, setIsSuccess] = useState('');
    const [open, setOpen] = useState(true);

    const date = new Date();

    const { user } = useAuth();

    const handleOnChange = e => {
        setReviewText(e.target.value);
    };

    const handleSubmitReview = e => {
        setOpen(true);

        const review = { reviewText, rating: value, name: user.displayName, date: date.toLocaleDateString() };

        fetch('https://watch-store-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setIsSuccess('success');
                    setReviewText('');
                    setValue(0);
                }
                else {
                    setIsSuccess('error');
                }
            });
        e.preventDefault();
    };

    return (
        <Box>
            <Typography variant='h5'>Give Your Review</Typography>
            <form onSubmit={handleSubmitReview}>
                <TextField
                    required
                    label="Review"
                    onChange={handleOnChange}
                    value={reviewText}
                    multiline
                    fullWidth
                    rows={6}
                />
                <br />
                <br />
                Rate Us:
                <br />
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <br /><br />
                <Button type='submit' variant='contained'>Submit Review</Button>
            </form>
            <br />
            {
                isSuccess === 'success' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="success">Your Review Submitted Successfully!</Alert>
                </Collapse>


            }
            {
                isSuccess === 'error' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="success">Failed to Submit Your Review!</Alert>
                </Collapse>


            }
        </Box>
    );
};

export default TakeReview;
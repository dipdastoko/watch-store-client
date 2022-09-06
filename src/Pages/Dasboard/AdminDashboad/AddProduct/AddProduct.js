import { Alert, Button, Collapse, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
    const [open, setOpen] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');

    const [productInfo, setProductInfo] = useState({
        name: '',
        img: '',
        price: '',
        shortDescription: ''
    });
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newProductInfo = { ...productInfo };
        newProductInfo[field] = value;
        console.log(newProductInfo);
        setProductInfo(newProductInfo);
    }
    const handleSubmit = e => {
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlertMessage('success');
                    Object.keys(productInfo).forEach(key => productInfo[key] = '');
                }
            });
        setOpen(true);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Product</h2>

                <TextField
                    label="Product Name"
                    name='name'
                    value={productInfo.name || ''}
                    onChange={handleOnBlur}
                    sx={{ width: 400 }}
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    label="Image Link"
                    name='img'
                    value={productInfo.img || ''}
                    onChange={handleOnBlur}
                    sx={{ width: 400 }}
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    label="Price"
                    name='price'
                    value={productInfo.price || ''}
                    onChange={handleOnBlur}
                    sx={{ width: 400 }}
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    label="About Product"
                    name='shortDescription'
                    value={productInfo.shortDescription || ''}
                    onChange={handleOnBlur}
                    sx={{ width: 400 }}
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <br /><br />
                <Button variant='contained' type='submit'>Add Product</Button>
            </form>
            <br /><br />
            {


                alertMessage === 'success' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="success">Product Added successfully!</Alert>
                </Collapse>


            }
        </div>
    );
};

export default AddProduct;
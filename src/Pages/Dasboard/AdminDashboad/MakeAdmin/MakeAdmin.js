import { Alert, Button, Collapse, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');

    const adminEmail = e => {
        setEmail(e.target.value);
    };

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://watch-store-server.vercel.app/user/makeadmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAlertMessage('success');
                    setOpen(true);
                }
                else if (data.matchedCount) {
                    setAlertMessage('already_admin');
                    setOpen(true);
                }
                else {
                    setAlertMessage('error');
                    setOpen(true);
                }
            })
    }
    return (
        <div>
            <h2>MakeAdmin</h2>
            <TextField
                sx={{ width: '300px' }}
                label="Enter Email"
                variant="outlined"
                onBlur={adminEmail}
            />
            <Button onClick={handleMakeAdmin} variant='contained' color='success' sx={{ ml: 2, mt: 1 }}>Make Admin</Button>

            <br />
            <br />
            {


                alertMessage === 'success' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="success">Admin assigned successfully!</Alert>
                </Collapse>


            }
            {
                alertMessage === 'already_admin' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="warning">User is already admin.</Alert>
                </Collapse>
            }
            {
                alertMessage === 'error' &&
                <Collapse in={open}>
                    <Alert onClose={() => { setOpen(false) }} variant="filled" severity="error">User doesn't exist.</Alert>
                </Collapse>
            }
        </div>
    );
};

export default MakeAdmin;
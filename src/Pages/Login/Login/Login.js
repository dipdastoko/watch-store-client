import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';

const Login = () => {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = e => {
        console.log(values);
        e.preventDefault();
    }
    return (
        <Box>
            <Navbar />
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                {/* email field */}
                <TextField
                    sx={{ width: '300px' }}
                    id="outlined-basic"
                    label="Email"
                    type='email'
                    onChange={handleChange('email')}
                    variant="outlined"
                />

                <br />
                <br />

                {/* password field */}
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        sx={{ width: '300px' }}
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <br />
                <br />

                {/* login button */}
                <Button type='submit' variant="contained" color="success">
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
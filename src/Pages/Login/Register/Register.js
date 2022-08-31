import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {

    const { registerWithEmailPass } = useAuth();

    const [values, setValues] = React.useState({
        name: '',
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

    const handleRegister = e => {
        registerWithEmailPass(values.email, values.password, values.name);
        e.preventDefault();
    }
    return (
        <Box>
            <Navbar />
            <h2>Register</h2>

            <form onSubmit={handleRegister}>

                {/* name field */}
                <TextField
                    sx={{ width: '300px' }}
                    label="Name"
                    type='text'
                    onChange={handleChange('name')}
                    variant="outlined"
                    required
                />

                <br />
                <br />

                {/* email field */}
                <TextField
                    sx={{ width: '300px' }}
                    label="Email"
                    type='email'
                    onChange={handleChange('email')}
                    variant="outlined"
                    required
                />

                <br />
                <br />

                {/* password field */}
                <FormControl variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        sx={{ width: '300px' }}
                        required
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
                    Register
                </Button>
            </form>

            <br />
            <Typography variant='subtitle1'>
                Already have an account?
                <Link to='/login'><Button variant="text">Login</Button></Link>

            </Typography>
        </Box>
    );
};

export default Register;
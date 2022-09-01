import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { googleSignIn, signInWithEmailPass } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

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
        signInWithEmailPass(values.email, values.password, location, navigate);
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
            <br />
            <Button onClick={() => googleSignIn(location, navigate)} variant="contained" color="primary">
                Sign in with google

            </Button>
            <br />
            <br />
            <Typography variant='subtitle1'>
                Don't have and account?
                <Link to='/register'><Button variant="text">Register</Button></Link>

            </Typography>
        </Box>
    );
};

export default Login;
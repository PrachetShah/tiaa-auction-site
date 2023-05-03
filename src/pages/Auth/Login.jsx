import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useEffect } from "react";
// import { gapi } from 'gapi-script';
import {
    Grid,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    Box,
} from "@mui/material";
// import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import Card from '@mui/material/Card'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useFormik } from 'formik';
import { styled, useTheme } from '@mui/material/styles';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { FormatAlignLeftSharp } from "@mui/icons-material";


const theme = createTheme();

const Login = () => {
    const onTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop();
    }, []);

    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: "537010121754-h774kl4n7hd7ncg3ili9svdffrch9hmb.apps.googleusercontent.com",
    //             scope: 'email',
    //         });
    //     }

    //     gapi.load('client:auth2', start);
    // }, []);


    const [passwordShow, setpassword] = React.useState(false);
    const [username, setUsername] = React.useState("");

    const history = useNavigate();
    const [values, setValues] = React.useState({
        "password": "",
        "email": "",
    });
    const inputChangeHandler = (e) => {
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const onSuccess = response => {
        console.log('SUCCESS', response);
        axios({
            method: "POST",
            url: "http://localhost:3500/login/googleauth",
            data: { tokenId: response.tokenId }
        })
            .then((res) => {
                console.log(res.data);
                history("/home");
            })
            .catch((e) => {
                console.log(e);
            })
    };
    const onFailure = response => {
        alert("failed");
        console.log('FAILED', response);
    };
    return (
        <Box sx={{ padding: '4%' }}>
            <Card>
                <Grid container spacing={3}>
                    <Grid item xs={false}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        sm={4}
                        md={6}>
                        <img src={"https://i.pinimg.com/736x/90/ea/63/90ea638a6f8e9ea59721b9f12b1f36b8.jpg"} alt="signup" style={{ width: "70%" }} />
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item xs={12} style={{ padding: "5vh", height: "87vh" }}>
                                <form autoComplete="off" style={{ width: "100%" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                                            Login
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                name="email"
                                                label="Email"
                                                value={values.email}
                                                onChange={inputChangeHandler}
                                                InputLabelProps={{ style: { fontSize: 20 } }}
                                                InputProps={{
                                                    style: { fontSize: 25 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <TextField
                                                    fullWidth
                                                    id="password"
                                                    name="password"
                                                    label="Password"
                                                    type={passwordShow ? "text" : "password"}
                                                    value={values.password}
                                                    onChange={inputChangeHandler}
                                                    InputLabelProps={{ style: { fontSize: 20 } }}

                                                    InputProps={{
                                                        style: { fontSize: 25 },
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onMouseDown={(e) => e.preventDefault()}
                                                                    edge="end"
                                                                    onClick={() => {
                                                                        setpassword(!passwordShow);
                                                                    }}
                                                                >
                                                                    {passwordShow ? (
                                                                        <VisibilityOff />
                                                                    ) : (
                                                                        <Visibility />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }} />
                                            </Grid>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                size="large"
                                                sx={{
                                                    backgroundColor: 'black'
                                                }}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.08,
                                                    textShadow: "0 0 8px rgb(255,255,255)",
                                                    transition: { duration: 0.3 },
                                                }}
                                                onClick={() => {

                                                    var axios = require('axios');
                                                    var data = JSON.stringify({
                                                        "email": values.email,
                                                        "password": values.password,
                                                    });

                                                    console.log(data);
                                                    history("/");
                                                    var config = {
                                                        method: 'post',
                                                        url: 'http://localhost:3500/login',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        data: data
                                                    };
                                                    axios(config)
                                                        .then(function (response) {
                                                            console.log(JSON.stringify(response.data));
                                                            history("/");
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        });
                                                }}
                                            >
                                                Submit
                                            </Button>

                                        </Grid>
                                        <Grid item xs={12} sx={{ fontSize: "1.2rem", fontWeight: "550" }}>

                                            <Link to='/signup' style={{ textDecoration: "none", color: "black" }}> Don't have an account ? Sign Up</Link>
                                        </Grid>
                                        <Grid item xs={12} sx={{ fontSize: "1rem", fontWeight: "500" }}>
                                            <Button
                                                color="error"
                                                variant="outlined"
                                                fullWidth

                                                style={{ marginBottom: "3vh" }}
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Input your email ",
                                                        input: "text",
                                                        inputLabel: "Email",
                                                        inputValidator: async (num) => {
                                                            console.log(num);
                                                            if (!num) {
                                                                return "You need to write something!";
                                                            } else if (num) {

                                                                var config2 = {
                                                                    method: "post",
                                                                    url: 'http://localhost:3500/forgotpw/email',
                                                                    headers: {
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    data: JSON.stringify({
                                                                        "email": num,
                                                                    }),
                                                                };
                                                                axios(config2)
                                                                    .then(function (response) {
                                                                        console.log(JSON.stringify(response.data));

                                                                        history(`/changepassword/${num}`);
                                                                    })
                                                                    .catch((e) => {
                                                                        Swal.fire({
                                                                            title: "invalid",
                                                                            icon: "error",
                                                                        });
                                                                    });
                                                            }
                                                        },
                                                    });
                                                }}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.08,
                                                    textShadow: "0 0 8px rgb(255,255,255)",
                                                    transition: { duration: 0.3 },
                                                }}
                                            >

                                                <Link
                                                    to="#"
                                                    style={{
                                                        textDecoration: "none",
                                                        fontSize: ".8rem",
                                                        color: 'red'
                                                    }}
                                                >
                                                    Forgot Password ?
                                                </Link>
                                            </Button>
                                            {/* <center>

                                                <GoogleLogin
                                                    fullWidth
                                                    clientId="537010121754-h774kl4n7hd7ncg3ili9svdffrch9hmb.apps.googleusercontent.com"
                                                    buttonText="Login with Google"
                                                    onSuccess={onSuccess}
                                                    onFailure={onFailure}
                                                    cookiePolicy={'single_host_origin'}
                                                /> */}
                                            {/* </center> */}
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card >

        </Box>
    )
}



export default Login;

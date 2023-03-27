import React from "react";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="Login">
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: 1,
                    m: 'auto',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    width: '30%',
                    gap: '20px'
                }}
                noValidate
                autoComplete="off"
                >
                <h1>Login</h1>
                <TextField required id="email-txt-field" label='Email'/>
                <TextField required id="email-txt-field" label='Password'/>
                <Button type="submit" variant="contained">Login</Button>
                <small>Don't have an account? <Link to="/signup">Sign Up Here</Link></small>
            </Box>
        </div>
    )
}
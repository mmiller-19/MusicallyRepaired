import React from "react";
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { InputLabel, MenuItem, Select } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUp() {
    return (
        <div className="SignUp">
            <h1>Create An Account</h1>
            <form>
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
                    <TextField required id="email-text-field" label="Email" type="text" fullWidth/>
                    <TextField required id="password-text-field" label="Username" type="text" fullWidth/>
                    <FormControl fullWidth>
                        <InputLabel id="account-type-select-label">Account Type</InputLabel>
                        <Select labelId="account-type-select-label" label="Account Type" defaultValue='account'>
                            <MenuItem value={"Customer"}>Customer</MenuItem>
                            <MenuItem value={"Company"}>Company</MenuItem>
                            <MenuItem value={"Technician"}>Technician</MenuItem>
                            <MenuItem value={"Front Desk"}>Front Desk</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </form>
            <small>Have an account? <Link to="/login">Log in here</Link></small>
        </div>
    )
}
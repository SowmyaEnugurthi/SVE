import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

import { NavLink } from 'react-router-dom';

function Landing() {
    const heroStyle = {
        minHeight: '100vh',
        // marginLeft: '10px',
       
        backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-digital-low-poly-connection-banner-design_1017-32434.jpg?w=1380&t=st=1683438889~exp=1683439489~hmac=699e1a300b6a9b8e68578f96475c34a4a3c4c0aeb67ffbea64490330022b1a81)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    const heroTextStyle = {
        color: 'white',
        textAlign: 'center',
    };

    const actionButtonStyle = {
        margin: '16px',
    };

    return (
        <div>
            <Grid container style={heroStyle}>
                <Grid item xs={12}>
                    <div style={heroTextStyle}>
                        <Typography variant="h3"
                            sx={{ color: "White", fontFamily: "raleway", marginBottom: "10px" }}
                        >Welcome to Sri Venkateswara Enterprises
                        </Typography>
                        <Typography variant="h6" color="lightcyan" fontFamily="raleway">We offer a wide range of Products & Services for all your Business Needs</Typography>
                        <NavLink to="/Contact Us">
                        <Button variant="contained" color="success" style={actionButtonStyle}>
                        
                            Contact Us
                           
                        </Button>
                        </NavLink>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Landing;
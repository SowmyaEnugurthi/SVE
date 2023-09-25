import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MailOutlineOutlined from '@mui/icons-material/MailOutlineOutlined';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <MailOutlineOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
           Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              fullWidth
             label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
              
              
            />
            <TextField
              margin="normal"
              
              fullWidth
              name="Mobile"
              label="Mobile"
               id="Number"
              autoComplete="Number"
            />


<TextField
              margin="normal"
              
              fullWidth
              id="email"
              label="user_email"
              name="email"
              autoComplete="email"
              autoFocus

            />
            
            <TextField
              margin="normal"
              
              fullWidth
             label="product_specification"
              name="product_specification"
              autoComplete="product_specification"
              autoFocus
              
              
            />
            <TextField
              margin="normal"
              
              fullWidth
             label="quantity"
              name="quantity"
              autoComplete="quantity"
              autoFocus
              
              
            />
           <Typography sx={{display:'flex', textAlign:'center',justifyContent:'center'}}>
            <Button 
              type="submit"
             
              variant="contained"
               sx={{mt:3,mb:2 }}
            >
              SUBMIT
            </Button>
            </Typography>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
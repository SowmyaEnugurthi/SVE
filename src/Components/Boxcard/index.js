import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import GroupIcon from '@mui/icons-material/Group';
import {Grid, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Boxcard(){{
    return(
        <>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:10, mb:10}}>
       <Grid item xs={1}>
       </Grid>
        <Grid item xs={3} sx={{border:1, borderRadius:5}}>
        <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(25, 118, 210)"}} >
       <BusinessCenterIcon />
       </Typography>
       <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(46, 139, 87)", fontSize:"24px"}} >
           25+
         </Typography>
         <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(25, 118, 210)"}} >
           Years of Experience
         </Typography>
  </Grid>
  <Grid item xs={0.5}>
       </Grid>
  <Grid item xs={3} sx={{border:1, borderRadius:5}}>


  <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(25, 118, 210)"}} >
  <GroupIcon />
  </Typography>
  <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(46, 139, 87)", fontSize:"24px"}} >
           55+ 
         </Typography>
         <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(25, 118, 210)"}} >
           Valuable Happy Clients Across India
         </Typography>
         </Grid>
         <Grid item xs={0.5}>
       </Grid>
         <Grid item xs={3} sx={{border:1, borderRadius:5}}>


 <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(25, 118, 210)"}} >
  <ShoppingCartIcon/>
  </Typography>
  <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(46, 139, 87)", fontSize:"24px"}} >
          Wide Range of Products
         </Typography>
         <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(25, 118, 210)"}} >
          You Name It, We Supply It
         </Typography>
         </Grid>
         
         </Grid>
        
        </>
    )
}}
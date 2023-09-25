import { Typography,Grid } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailIcon from '@mui/icons-material/Email';
import Email from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOn from "@mui/icons-material/LocationOn";
import SignIn from "../../Components/SignIn";
import Footer from "../../Components/Footer";
import Divider from '@mui/material/Divider';

export default function ContactUs(){
    return(
        <>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:5}}  >
      <img
      src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1683726977~exp=1683727577~hmac=9893196b239ec6fcceaf168e2acd2092f515124eb5b133d859a87fd54c6e02cd"
      width="740px"
      height="740px"
    
       />
       </div>
       
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

    <Grid item xs={6}>
       <Typography variant="h4" sx={{textAlign:"center",color:"purple",fontFamily:"Raleway",mt:7,mb:1}}>
       Connect
       </Typography>
       <Divider variant="middle" />
       <Typography variant="h5" sx={{textAlign:"center",color:"orangered",fontFamily:"Raleway",mt:1,fontWeight:700, mb:1}}>
       Sri Venkateswara Enterprises
       </Typography>
       <Typography sx={{alignItems:'center', justifyContent:'center',display:'flex',mb:1}}>
       <CallRoundedIcon/>
       </Typography>
       <Typography variant="h5" sx={{textAlign:"center",color:"green",fontFamily:"Raleway",mb:1}}>
       Call Us
       </Typography>
       <Typography variant="body1" sx={{textAlign:"center",color:"black",fontFamily:"Raleway",mb:1, fontWeight:700}}>
       +919849044476
       </Typography>
       <Typography sx={{alignItems:'center', justifyContent:'center',display:'flex',mb:1}}>
      <Email/>
       </Typography>
       <Typography variant="h5" sx={{textAlign:"center",color:"green",fontFamily:"Raleway",mb:1}}>
       Email
       </Typography>
       <Typography variant="body1" sx={{textAlign:"center",color:"black",fontFamily:"Raleway",mb:1, fontWeight:700}}>
       enquiry@sve.enterprises
       </Typography>
       <Typography sx={{alignItems:'center', justifyContent:'center',display:'flex',mb:1}}>
     <LocationOn/>
       </Typography>
       <Typography variant="h5" sx={{textAlign:"center",color:"green",fontFamily:"Raleway", mb:1}}>
       Regd. Office
       </Typography>
       <Typography variant="body1" sx={{textAlign:"center",color:"black",fontFamily:"Raleway",mb:1, fontWeight:700}} >
       12-1-508/89/5, Laxminagar, North Lallaguda, Hyderabad, Telangana - 500017, India
       </Typography>
       </Grid>
       

 <Grid item xs={6}>
       <SignIn/>
       </Grid>
       </Grid>
      
       <Footer/>
       
        </>
    )
}
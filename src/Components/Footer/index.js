import { Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer(){
    return(
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5}}>

<Grid item xs={6}>
    <Typography sx={{display:"flex",textAlign:"center",justifyContent:"center"  }}>
    Copyright © Sri Venkateswara Enterprises 2023.
    </Typography>
    <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"  }}>
        <FacebookOutlinedIcon sx={{color:"blue"}} />
<InstagramIcon sx={{color:"red", ml:1}} />
<TwitterIcon sx={{color:"blue", ml:1}}/>
<LocationOnIcon sx={{color:"green", ml:1}}/>
    </Typography>



</Grid>

<Grid item xs={6}>
    <Typography sx={{display:"flex",textAlign:"center",justifyContent:"center" }} >
    Powered by 6icube Techno Consultants Pvt. Ltd.
    </Typography>
</Grid>
</Grid>
        </>
    )
}
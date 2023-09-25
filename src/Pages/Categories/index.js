import { Typography } from "@mui/material";
import AccordionComponent from "../../Components/Accordion";
import Footer from "../../Components/Footer";


export default function Categories(){
    return(
        <>
        <Typography variant="h5" sx={{textAlign:"center",color:"darkorange",fontFamily:"Raleway",fontWeight:700}}>
        Our Wide Range of Product Categories
        </Typography>
     <AccordionComponent/>

     <Footer/>
        </>
    )
}
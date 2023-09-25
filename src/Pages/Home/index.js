import { Grid, Typography } from "@mui/material";
import ProductsCard from "../../Components/ProductsCard";
import TestimonialsCard from "../../Components/Testimonials Card";
import Footer from "../../Components/Footer";
import Landing from "../../Components/Landing";
import Boxcard from "../../Components/Boxcard";

export default function Home(){
    return(
        <>
         <Landing/>
         <Boxcard/>
        
        
        
<Typography variant="h4" sx={{textAlign:"center", color:"orangered", fontFamily:"Raleway", mt:3,mb:4}}>
    Our Products & Services
</Typography>

<Grid container rowSpacing={1.25} columnSpacing={{ xs:1, sm:1, md:1.25 }} >

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
text="Hand Tools" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
text="Fabrications & Welding" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t3.ftcdn.net/jpg/04/16/23/60/240_F_416236080_iUvBR5Z3rpYoCF0SPQF9Tk41uXIDcn8B.jpg"
text="Bearings & Power Transmission" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/00/82/26/31/240_F_82263145_ileEZAdzH62kC1heFapQmfbO7azXBbxj.jpg"
text="Hydraulics" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
text="All types of Pipes & Fittings" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
text="MS Structural Steel" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
text="Industrial Chemicals" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
text="Industrial Lubricants" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
text="General Stationery" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t3.ftcdn.net/jpg/00/86/09/02/240_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
text="Security" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
text="Pumps & Motors" />
</Grid>

<Grid item xs={3}>
<ProductsCard
image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
text="Hardware" />
</Grid>
</Grid>

<Typography variant="h4" sx={{textAlign:"center", color:"green", fontFamily:"Raleway",mt:6,mb:5}}>
    Our Client Testimonials
</Typography>


    


<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4}} >


<Grid item xs={1.5}>

</Grid>
<Grid item xs={3}>
<TestimonialsCard
title="T Satish Babu" 
subtitle="Manager - Maintenance & Production"
description='"I am very satisfied with the service provided by this company. The team was very professional and responsive to my needs."' 
/>
</Grid>

<Grid item xs={3}>
<TestimonialsCard
title="Vrushali Pol" 
subtitle="Manager - Enterprise Sales"
description='"I have been a customer of this company for several years now and I have always been impressed with their pompt reply, commited work & good with market price."'
/>
</Grid>

<Grid item xs={3}>
<TestimonialsCard
title="J Praven Kumar Reddy" 
subtitle="Junior Engineer - Mechanical"
description='"The firm so supportive, creative and spontaneous to work. They support us 24/7, even in odd times and their creativeness is so amazing. Thanks for the support"' 
/>
</Grid>
<Grid item xs={1.5}></Grid>

<Grid item xs={3
}></Grid>
<Grid item xs={3}>
<TestimonialsCard
title="Subramanian Viswanathan" 
subtitle="Production Manager"
description='"I have been a client to this firm from a long time. Almost all products & services will be available at very reasonable prices."' 
/>
</Grid>

<Grid item xs={3}>
<TestimonialsCard
title="G Shivanand Basavaraj" 
subtitle="Manager - Purchase"
description='"The team over there has always been proactive in answering us & maintaining a good relation with us.Thanks for the services."' 
/>
</Grid>

</Grid>
<Footer/>


</>

    )
}
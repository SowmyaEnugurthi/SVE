import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// 


export default function TestimonialsCard(props) {
   
    const title = props.title;
    const subtitle = props.subtitle;
    const description = props.description;


  return (
    <Card sx={{textAlign:"center" }} >
      <CardContent >
        
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant='body1'  color="text.secondary" >
         {subtitle}
        </Typography>
        <Typography variant="body1" sx={{wordSpacing:5}} >
         {description}
        </Typography>
      
      </CardContent>
     
    </Card>
  );
}
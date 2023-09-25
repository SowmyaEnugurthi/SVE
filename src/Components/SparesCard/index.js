import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SparesCard(props) {
 const image = props.image
  const title = props.title
    const description =props.description
  return (
    <Card sx={{ maxWidth: 570 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body1" component="div" sx={{textAlign:'center'}}>
           {title}
          </Typography>
          <Typography sx={{fontSize:12,textAlign:'center'}} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
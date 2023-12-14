import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { typeHandler } from '../../utils';
import { CardActionArea } from '@mui/material';

export default function PokdeCard({ name, image, types }) {

  return (
    <Card sx={{ maxWidth: 200 }}>
     <CardActionArea
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Ajuste a intensidade aqui (0.5 é 50% de opacidade)
          },
        }}
      >
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler(types)}
          </Typography>
        </Box>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </CardActionArea>
    </Card>
    
  );
}
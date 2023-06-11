import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function GrowthCard({
    title,
    key,
    categories,
    description
}) {
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent className='bg-blue-300 flex gap-4 flex-col'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {title}
        </Typography>
        <Typography variant="h5" component="div" className='flex gap-4'>
            {categories.map((category) => ( 
                <span className='rounded bg-slate-300 py-1 px-3 text-sm'  >{category}</span>
            ))}

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions className='bg-blue-300 border-t-2 text-slate-800'>
        <Button size="small">S'inscrire</Button>
      </CardActions>
    </Card>
  );
}
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ListaAutos from '../helpers/ListaAutos.json'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';



const Item = styled( Card )(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));



export default function Listcar() {
  return (

    <Stack 
    direction="column" 
    spacing={8}
    sx={{ 
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
      }}>
    {ListaAutos.autos.map((ListaAuto) =>(
    <Item> 
  
    <Card sx={{ maxWidth: 400 }} key={ListaAuto}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={ListaAuto.ima}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {ListaAuto.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </Item>  
    ))} 
    </Stack>
    );
}

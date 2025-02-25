import React from 'react'
import { Box } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ListaAutos from '../../../helpers/ListaAutos.json'




export default function Car_imagen() {
    const hondaNSX = ListaAutos.autos.find(auto => auto.name === "Honda NSX");




  return (
   <Box className ="main__item car_Imagen" >
        <Card sx={{width: 600 }}>
            <CardMedia
            component="img"
            sx={{ width: 600}}          
            image={hondaNSX.ima}
            />
        </Card>
    </Box>
  )
}
















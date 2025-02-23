import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ListaAutos from '../../helpers/ListaAutos.json'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



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

   

    <Box  className="main__item stack__Car"  >
    {ListaAutos.autos.map((ListaAuto) =>(
    <Paper key={ListaAuto}  sx={{ margin:"20px"}}>
            <CardMedia
            component="img"
            sx={{ width: 600, justifySelf:"center" }}          
            image={ListaAuto.ima}
            />
            <CardContent sx={{  display:'flex', flexWrap:'wrap', justifyContent:"start" }}>
            <Typography gutterBottom variant="h5" component="div">
            {ListaAuto.name}
            </Typography >
            <Typography variant ="h5">
              {ListaAuto.presentacion}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {ListaAuto.description}
            </Typography>
            <Typography variant ="h5">
              {ListaAuto.diseño}
            </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {ListaAuto.deseñoDescripcion}
            </Typography>
            <Typography variant ="h5">
              {ListaAuto.potencia}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {ListaAuto.potenciaDescripcion}
            </Typography>
            <Typography variant ="h5">
              {ListaAuto.legadoo}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {ListaAuto.legado}
            </Typography>
            </CardContent>
        </Paper>
    ))} 
   </Box>
    );
}

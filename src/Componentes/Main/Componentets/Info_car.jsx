import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListaAutos from '../../../helpers/ListaAutos.json'
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';



export default function Info_car() {
  const hondaNSX = ListaAutos.autos.find(auto => auto.name === "Honda NSX");

  return (
  <Box  className="main__item stack__Car"  >
    <Card sx={{height:"400px", alignContent:"center" }}>
        <CardContent sx={{  display:'flex', flexWrap:'wrap', justifyContent:"start"}}>
            <Typography gutterBottom variant="h5" component="div">
            {hondaNSX.name}
            </Typography >
            <Typography variant ="h5">
              {hondaNSX.presentacion}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {hondaNSX.description}
            </Typography>
            <Typography variant ="h5">
              {hondaNSX.legadoo}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {hondaNSX.legado}
            </Typography>
        </CardContent>
    </Card>
  </Box>
    );
}

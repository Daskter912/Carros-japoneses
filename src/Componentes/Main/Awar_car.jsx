import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListaAutos from '../../helpers/ListaAutos.json'
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';



export default function Awar_car() {
    const hondaNSX = ListaAutos.autos.find(auto => auto.name === "Honda NSX");



  return (
    <Box  className="main__item awards"  >
      <Card   sx={{height:"240px" }}>
          <CardContent sx={{  display:'flex', flexWrap:'wrap', justifyContent:"start" }}>
              <Typography gutterBottom variant="h5" component="div">
              {hondaNSX.logros}
              </Typography >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {hondaNSX.compétencias}
              </Typography>
          </CardContent>
      </Card>
    </Box>
  )
}

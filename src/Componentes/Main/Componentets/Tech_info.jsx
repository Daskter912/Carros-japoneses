import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListaAutos from '../../../helpers/ListaAutos.json'
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';


export default function Tech_info() {
    const hondaNSX = ListaAutos.autos.find(auto => auto.name === "Honda NSX");

  return (
    
    <Box  className="main__item tech_info"  >
        <Paper sx={{height:"660px"}} >
            <CardContent sx={{  display:'flex', flexWrap:'wrap'}}>
            <Typography gutterBottom variant="h5" component="div">
            {hondaNSX.espec}
            </Typography >
            
            <Typography variant="body2" sx={{ color: 'text.secondary',flexWrap:'wrap' }}>
                {hondaNSX.especiciaciones}
            </Typography>
            </CardContent>
        </Paper>
    </Box>
    );
}

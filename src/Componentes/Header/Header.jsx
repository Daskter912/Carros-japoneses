import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { BrandContext } from '../../Context/UseContexBrand';

export default function Header() {


  const [anchorEl, setAnchorEl] = React.useState(null);


  const {marcas,Opselect, setOpselect} = useContext(BrandContext);

  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1}} className='main__item  header'  >
    <AppBar position="static" color='default' >
      <Toolbar sx={{}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Amantes de los autos japonenes
        </Typography>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Marcas
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {marcas.map((marca) => (
                <MenuItem key={marca} onClick={''}>
                  <Typography sx={{ textAlign: 'center' }}>{marca}</Typography>
                </MenuItem>
              ))}
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={''}
      >
        Videos
      </Button>

      </Toolbar>
    </AppBar>
  </Box>
  )
}


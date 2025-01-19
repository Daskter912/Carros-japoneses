import React from 'react'
import Drawer from '@mui/material/Drawer';
import Aside from './Aside';


export default function Draw() {
    
  const {DrawerList, toggleDrawer, open} = Aside();
    
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
    {DrawerList}
    </Drawer>
  );
}

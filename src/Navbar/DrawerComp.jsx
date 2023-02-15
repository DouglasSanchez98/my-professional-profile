import React from 'react'
import { Drawer, List, ListItemButton, IconButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const PagesArr = ["Inicio"];


const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
        <List>
          {
            PagesArr.map((page,index)=>(
              <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{color:"#000000"}}> {page} </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            ))
          }
         
        </List>

      </Drawer>
      <IconButton
      sx={{color:"white", marginLeft:"auto"}} onClick={()=> setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>

    </>

  )
}

export default DrawerComp

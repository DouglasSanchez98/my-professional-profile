import { Button, AppBar, Toolbar, Tabs, IconButton, Typography, Stack, Tab, useMediaQuery, useTheme } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material';

import React, { useState } from 'react'
import styledx from 'styled-components';
import DrawerComp from './DrawerComp';
const PagesArr = ["Inicio", "Materiales", "Servicios", "Contáctanos"];

const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>

            <AppBar position='static' sx={{ background: "#063970" }}>
                <Toolbar>
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <CatchingPokemon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        IVER-MATERIALES
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>Materiales</Button>
                        <Button color='inherit'>Servicios</Button>
                        <Button color='inherit'>Contacto</Button>
                        <Button color='inherit'>Nosotros</Button>

                    </Stack>
                    */}
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize:'1.5rem',paddingLeft:'2.5%'}}>
                                    SHOPP
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit"
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="primary">
                                    {
                                        PagesArr.map((page, index) => (
                                            <Tab key={index} label={page}/>
                                        ))
                                    }


                                </Tabs>
                                <Button sx={{ marginLeft: "auto" }} variant='contained'> Login </Button>
                                <Button sx={{ marginLeft: "10px" }} variant='contained'> SingUp </Button>

                            </>
                        )
                    }

                </Toolbar>
            </AppBar>



        </>

    )
}

export default Navbar


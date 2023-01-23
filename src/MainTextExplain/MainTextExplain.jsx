import React from 'react'
import {
    Button, AppBar, Toolbar, Tabs, IconButton,
    Typography, Stack, Tab, useMediaQuery, useTheme, Grid
} from '@mui/material'

const MainTextExplain = () => {
    const matches = useMediaQuery('(min-width:600px)'); // true up to 600px - false down to 600px

    return (
        <div>
             {matches
                ? <Typography variant='h2' sx={{ fontSize: '40px', paddingLeft: '2.5%' }}>
                En este espacio explicaremos la finalidad de la empresa y que es lo que ofrece para la comunidad
                </Typography>
                : <Typography variant='h2' sx={{ fontSize: '25px', paddingLeft: '2.5%' }}>
                En este espacio explicaremos la finalidad de la empresa y que es lo que ofrece para la comunidad
                </Typography>

            }
        </div>
    )
}

export default MainTextExplain

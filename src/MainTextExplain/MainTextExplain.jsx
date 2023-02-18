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
                ? <Typography variant='h2' sx={{ fontSize: '25px', paddingLeft: '2.5%', paddingTop:'15px' }}>
                    Para construir una estructura estable y eficiente es necesario contar con materiales de alta durabilidad, materiales que resistan la degradación y acción de factores externos como humedad, temperatura o vientos.
                    En Iver Insumos de Construcción ofrecemos materiales de alta calidad para su construcción, con el transporte mas seguro y eficiente.
                </Typography>
                : <Typography variant='h2' sx={{ fontSize: '15px', paddingLeft: '2.5%',paddingTop:'10px' }}>
                    Para construir una estructura estable y eficiente es necesario contar con materiales de alta durabilidad, materiales que resistan la degradación y acción de factores externos como humedad, temperatura o vientos.
                    En Iver Insumos de Construcción ofrecemos materiales de alta calidad para su construcción, con el transporte mas seguro y eficiente.
                </Typography>

            }
        </div>
    )
}

export default MainTextExplain

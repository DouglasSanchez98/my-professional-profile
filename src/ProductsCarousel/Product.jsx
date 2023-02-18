import React from 'react'
import ReactWhatsapp from 'react-whatsapp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
    Button, AppBar, Toolbar, Tabs, IconButton,
    Typography, Stack, Tab, useMediaQuery, useTheme, Grid
} from '@mui/material'
import { borderColor } from '@mui/system';
const Product = (props) => {

    return (
        <div className='card'>
            <img
                className='product--image'
                src={props.url}
                alt='product image'
            />
            <h2>
                {props.name}
            </h2>
            {/* <p className='price'>
        {props.price}
    </p>*/}
            <p> {props.description} </p>
            <p>
                <button>
                    <Grid container>
                        <Grid item xs={6} container justifyContent='flex-end' >
                            <WhatsAppIcon color="success" sx={{marginRight:'25%'}}  />

                        </Grid>
                        <Grid item xs={6} container justifyContent='flex-start'>
                            
                                <ReactWhatsapp number="+59174923247" message={"Saludos quiero comprar " + props.name} 
                                element='text' style={{marginTop:'3px', marginLeft:'-20%'}}>
                                    Solicitar
                                </ReactWhatsapp>
                           
                        </Grid>

                    </Grid>


                </button>
            </p>
        </div>
    )
}

export default Product

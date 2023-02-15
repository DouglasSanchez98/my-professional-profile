import React from 'react'
import ReactWhatsapp from 'react-whatsapp'
import {
    Button, AppBar, Toolbar, Tabs, IconButton,
    Typography, Stack, Tab, useMediaQuery, useTheme, Grid
} from '@mui/material'
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
                    <ReactWhatsapp number="+59174923247" message={"Saludos quiero comprar " + props.name} element='text'>
                        Contacto
                    </ReactWhatsapp>
                </button>
            </p>
        </div>
    )
}

export default Product

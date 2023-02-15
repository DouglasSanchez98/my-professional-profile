import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from './productData';
import Product from './Product';
import './ProductsCarousel.css'
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductsCarousel = () => {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));

    const matches = useMediaQuery('(min-width:600px)'); // true up to 600px - false down to 600px


    return (
        <div>

            {/*CONDITIONAL SIZE TEXT 
            
            - Typography variant='h2' sx={{ fontSize: '4.5vw' }} use vw to set size relative to screen

            */}
            {matches
                ? <Typography variant='h2' sx={{ fontSize: '50px', fontWeight:'bold', marginTop:'8px' }}>
                    Lista de Materiales
                </Typography>
                : <Typography variant='h2' sx={{ fontSize: '30px', fontWeight:'bold',marginTop:'8px' }}>
                    Lista de Materiales
                </Typography>

            }

           

            <Carousel responsive={responsive}>
                {product}
            </Carousel>
        </div>
    )
}

export default ProductsCarousel

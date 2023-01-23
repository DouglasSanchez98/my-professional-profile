import { Grid, Typography } from "@mui/material";
import { productData } from "../ProductsCarousel/productData";
import { servicesData } from "../ProductsCarousel/servicesData";
import React from "react";
import ProductsFooter from "./ProductsFooter";
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const product = productData.map((item) => (
        <ProductsFooter
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));
    const service = servicesData.map((item) => (
        <ProductsFooter
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));

    const matches = useMediaQuery('(min-width:600px)'); // true up to 600px - false down to 600px

    return (
        <>
            {matches
                ?
                <div>
                    <Grid container>
                        <Grid item xs={12} sx={{ backgroundColor: '#3C3939', padding: '1em 0', textAlign: 'center' }} >
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography variant='h2' sx={{ fontSize: '25px', color: 'white', fontWeight: 'bold'}}>
                                        Iver Insumos de Construcción
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: '18px', color: 'white', marginTop:'10px' }}>
                                        Somos una empresa dedicada al abastecimiento de material de construcción
                                    </Typography>


                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='h2' sx={{ fontSize: '25px', color: 'white', fontWeight: 'bold' }}>
                                        Materiales
                                    </Typography>
                                    {product}
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='h2' sx={{ fontSize: '25px', color: 'white', fontWeight: 'bold' }}>
                                        Servicios
                                    </Typography>
                                    {service}
                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>
                </div>

                :
                <></>

            }

        </>


    )
}

export default Footer

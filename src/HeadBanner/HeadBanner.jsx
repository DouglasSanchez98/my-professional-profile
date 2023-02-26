import React from 'react'
import './HeadBanner.css'
import {
    Button, AppBar, Toolbar, Tabs, IconButton,
    Typography, Stack, Tab, useMediaQuery, useTheme, Grid
} from '@mui/material'


/*class HeadBanner extends React.Component {



    render() {
        const matches = useMediaQuery('(min-width:600px)'); // true up to 600px - false down to 600px

        return (
            <div>
                {matches
                    ? <img src='/PruebaBaner3.png' role="presentation" className='responsive' />
                    : <img src='/Isologo.png' role="presentation" className='responsive' />
                }


            </div>
        )
    }

}*/
const HeadBanner = () => {
    const matches = useMediaQuery('(min-width:600px)'); // true up to 600px - false down to 600px

    return(
        <div>
                {matches
                    ? <img src='https://imagess3projects.s3.sa-east-1.amazonaws.com/IverCompany/bannerDesktop2.png' role="presentation" className='responsive' />
                    : <img src='https://imagess3projects.s3.sa-east-1.amazonaws.com/IverCompany/bannerMobile.png' role="presentation" className='responsive' />
                }


            </div>
    )
}



export default HeadBanner

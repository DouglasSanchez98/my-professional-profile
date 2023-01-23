import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar/Navbar';
import Carousel from './SliderBanner/SliderBanner';
import MainTextExplain from './MainTextExplain/MainTextExplain';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';
import Footer from './Footer/Footer';
const carouselData = {
    timeoutTime: 5000,
    items: [
        {
            key: 1,
            image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Slide #1',
            caption: 'IMAGEN 1'
        },
        {
            key: 2,
            image: 'https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Slide #2',
            caption: 'IMAGEN 2'
        },
        {
            key: 3,
            image: 'https://cdn.pixabay.com/photo/2016/09/01/15/05/construction-site-1636318__340.jpg',
            title: 'Slide #3',
            caption: 'IMAGEN 3'
        }
    ]
};

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Navbar />
        <Carousel {...carouselData} />,
      <MainTextExplain/>
      <ProductsCarousel/>
      <Footer></Footer>
    </React.StrictMode>
);


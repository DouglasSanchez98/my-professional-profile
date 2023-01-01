import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar/Navbar';
//import SliderBanner from './SliderBanner/SliderBanner';
import Carousel from './SliderBanner/SliderBanner';
const carouselData = {
    timeoutTime: 5000,
    items: [
        {
            key: 1,
            image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325',
            title: 'Slide #1',
            caption: 'IMAGEN 1'
        },
        {
            key: 2,
            image: 'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325',
            title: 'Slide #2',
            caption: 'IMAGEN 2'
        },
        {
            key: 3,
            image: 'https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325',
            title: 'Slide #3',
            caption: 'IMAGEN 3'
        }
    ]
};

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Navbar />
        <Carousel {...carouselData} />,
        {/*  <SliderBanner />*/}
    </React.StrictMode>
);


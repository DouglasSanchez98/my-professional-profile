import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import MyPersonalProfile from './MyPersonalProfile';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyPersonalProfile/>
        <FirstApp/>
    </React.StrictMode>
);

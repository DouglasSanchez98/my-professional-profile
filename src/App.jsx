import React from 'react'
import { useState } from "react";
import Contact from './components/Contact.jsx';
import Main from './components/Main.jsx';
import Projects from './components/Projects.jsx';
import SideNav from "./components/SideNav.jsx";
import Work from './components/Work.jsx';

function App() {
    return (
        <div>
            <SideNav/>
            <Main/>
            <Work/>
            <Projects/>
            <Contact/>
        
        </div>
    )
}

export default App
import { motion } from 'framer-motion'

import VideoOverlay from './Components/VideoOverlay/VideoOverlay.jsx';
import { useState } from "react";
import Example from './Routes/Client/Client.jsx'
import TestRoute from './Routes/Tests/TestRoute.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideStaggerNav from './Components/Navigation/SideStaggerNav/SideStaggerNav.jsx';
import { SlidePortal } from './Components/Navigation/SlidePortal/SlidePortal.jsx';
import Slide from './Components/Slide/Slide.jsx';

function App() {
    const [clientActive, setClientActive] = useState(false);
    function changeClientState() {
        console.log(clientActive)
        setClientActive(!clientActive);
    }

    return (
        <div className='App'>
            <motion.div className='main-container'>
                <Slide active={clientActive} exit={changeClientState } />

                <Router>

                    <div className='content'>
                        
                        <Routes>
                            {<Route path="/" element={<TestRoute />} />}
                            <Route path="/client" element={<Example />} />
                        </Routes>
                    </div>
                </Router>
                <SideStaggerNav theClientIsActive={clientActive} setClientActive={changeClientState} />
            </motion.div>
        </div>
    );
}

export default App;
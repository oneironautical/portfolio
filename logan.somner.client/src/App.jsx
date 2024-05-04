import { motion } from 'framer-motion'

import VideoOverlay from './Components/VideoOverlay/VideoOverlay.jsx';
import  Example  from './Routes/Client/Client.jsx'
import TestRoute from './Routes/Tests/TestRoute.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideStaggerNav from './Components/Navigation/SideStaggerNav/SideStaggerNav.jsx';
function App() {

    return (
        <div className='App'>
            <motion.div className='main-container'>
                <VideoOverlay />
                
                <Router>
                    <div className='content'>
                        
                        <Routes>
                            {<Route path="/" element={<TestRoute />} />}
                            <Route path="/client" element={<Example />} />
                        </Routes>
                    </div>
                </Router>
                <SideStaggerNav />
            </motion.div>
        </div>
    );
}

export default App;
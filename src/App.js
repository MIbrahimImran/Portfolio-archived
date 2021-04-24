import React from 'react';
import { Canvas } from '@react-three/fiber';

import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import Mininav from './Components/Mininav';
import { BackgroundStars, BackgroundSphere } from './Components/Objects3D';

function App() {
  return (
    <div className="relative h-screen text-white">
      <div className="fixed bg-galaxy bg-cover bg-center h-full w-full">
        <Canvas>
          <pointLight position={[1, 1, 0]} />
          <BackgroundStars></BackgroundStars>
          <BackgroundSphere></BackgroundSphere>
        </Canvas>
      </div>
      <div className="relative px-8 sm:px-20">
        <Navbar></Navbar>
        <div className="sm:px-14">
          <Home></Home>
          <div className="space-y-72">
            <About></About>
            <Work></Work>
            <Experience></Experience>
          </div>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

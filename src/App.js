import { Canvas } from '@react-three/fiber';
import { Stars, Text } from '@react-three/drei';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Mininav from './Components/Mininav';

function App() {
  return (
    <div className="relative h-screen text-white">
      <div className="fixed bg-galaxy bg-cover bg-center	 h-full w-full">
        <Canvas>
          <Stars
            radius={100}
            depth={100}
            count={5000}
            factor={4}
            saturation={1}
            fade
          ></Stars>
          <Text
            color="white" // default
            anchorX="center" // default
            anchorY="middle" // default
          >
            These Stars are real
          </Text>
        </Canvas>
      </div>
      <div className="relative px-20">
        <Navbar></Navbar>
        <div className="sm:px-14">
          <Home></Home>
          <About></About>
          <Experience></Experience>
          <Work></Work>
          <Contact></Contact>
        </div>
        <Mininav></Mininav>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

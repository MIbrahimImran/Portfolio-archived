import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
// import Home from './Components/Home';
// import About from './Components/About';
// import Experience from './Components/Experience';
// import Work from './Components/Work';
// import Contact from './Components/Contact';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Mininav from './Components/Mininav';

function App() {
  return (
    <div className="bg-galaxy h-screen w-screen">
      <Canvas>
        <Stars></Stars>
      </Canvas>
    </div>
  );
}

export default App;

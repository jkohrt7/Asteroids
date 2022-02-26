import Box from './components/Box';
import Asteroid from './components/Asteroid';
import Astronaut from './components/Astronaut_compressed.js';
import { OrbitControls } from '@react-three/drei';
import SpaceBG from './components/SpaceBG';

import BasicScene from './components/BasicScene';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';

function App() {
  
  return (
    <BasicScene>
      <Suspense fallback = {<Box/>}>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Asteroid position = {[2,0,0]}/>
        <Astronaut scale = {[0.1,0.1,0.1]} position = {[-2,0,0]}/>
        <SpaceBG position = {[0,0,-50]}/>
      </Suspense>
    </BasicScene>
  );
}

export default App;

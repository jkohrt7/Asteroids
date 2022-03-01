import Box from './components/Box';
import Asteroid from './components/Asteroid';
import Astronaut from './components/Astronaut_compressed.js';
import { OrbitControls } from '@react-three/drei';
import SpaceBG from './components/SpaceBG';

import BasicScene from './components/BasicScene';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useEffect } from 'react';

function App() {
  
  const [zoom, setZoom] = useState(10);

  function moveCamera() {
    let newZoom = zoom + 50;
    setZoom(newZoom);
  }

  return (
    <div id = "canvas-container" >
      <BasicScene>
        <Suspense fallback = {null}>
          <Asteroid zoom = {zoom} position = {[zoom/2,0,0]} scale = {zoom/8}/>
          <Astronaut scale = {[0.1,0.1,0.1]} position = {[-2,0,0]}/>
          <SpaceBG position = {[0,0,-50]}/>
        </Suspense>
      </BasicScene>
      <div onClick = {moveCamera} className='Button'>Button</div>
    </div>
  );
}

export default App;

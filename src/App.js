import Box from './components/Box';
import Asteroid from './components/Asteroid';
import Astronaut from './components/Astronaut_compressed.js';
import SpaceBG from './components/SpaceBG';
import BasicScene from './components/BasicScene';
import AsteroidList from './components/AsteroidList';

import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useEffect, Suspense } from 'react';

import './App.css'

function App() {
  
  //Controls the camera position.
  const [zoom, setZoom] = useState(10);
  function moveCamera() {
    let newZoom = zoom + 50;
    setZoom(newZoom);
  }

  return (
    <div id = "main-container">
      <BasicScene>
        {/* <Suspense fallback = {null}>
          <Asteroid zoom = {zoom} position = {[zoom/2,0,0]} scale = {zoom/8}/>
          <Astronaut scale = {[0.1,0.1,0.1]} position = {[-2,0,0]}/>
          <SpaceBG position = {[0,0,-50]}/>
        </Suspense> */}
      </BasicScene>
      <AsteroidList/>
    </div>
  );
}

export default App;

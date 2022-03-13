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
  const [zoom, setZoom] = useState(1);
  function moveCamera() {
    let newZoom = zoom + 50;
    setZoom(newZoom);
  }

  //Get a list of asteroids passing in the next week from the NASA NEO api
  const [allAsteroidData, setAsteroidData] = useState(false);
  useEffect(() => {
      let today = new Date();

      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;

      fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_data=${today}&api_key=hMvAKv2iX56ehyLToioQbO6OMPqUmVH9HTDQEJhe`)
          .then(res => res.json())
          .then(data => {
            //Change from *inhales* object of arrays of objects to just array of objects
            let dataArr = [];
            
            for(let dateProperty in data.near_earth_objects) {
                data.near_earth_objects[dateProperty].map((item) => {
                    dataArr.push(item)
                    return;
                }) 
            }
            setAsteroidData(dataArr)

          })
          .catch((error) => {
              console.error('Error: ' + error)
      })
  }, [])

  //Keep track of the selected asteroid
  const [currAsteroid, setCurrAsteroid] = useState(false);

  return (
    <div id = "main-container">
      <BasicScene>
        <Suspense fallback = {null}>
          <Asteroid 
            zoom = {(currAsteroid ? currAsteroid.estimated_diameter.feet.estimated_diameter_min * 0.16666:1)} 
            position = {[(currAsteroid ? currAsteroid.estimated_diameter.feet.estimated_diameter_min*0.083333 : .5),0,0]} 
            scale = {currAsteroid ? (currAsteroid.estimated_diameter.feet.estimated_diameter_min * .016666) : .1} 
            data = {allAsteroidData}
          />
          <Astronaut scale = {[0.01,0.01,0.01]} />
          <SpaceBG position = {[0,0,0]}/>
        </Suspense>
      </BasicScene>
      <AsteroidList data = {allAsteroidData} setAsteroidData = {setAsteroidData} currAsteroid = {currAsteroid} asteroidSetter = {setCurrAsteroid} />
    </div>
  );
}

export default App;

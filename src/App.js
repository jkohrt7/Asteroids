import Box from './components/Box';
import Asteroid from './components/Asteroid';
import BasicScene from './components/BasicScene';
import { Suspense } from 'react';

function App() {
  return (
    <BasicScene>
      <Suspense fallback = {<Box/>}><Asteroid position = {[0,0,0]}/></Suspense>
    </BasicScene>
  );
}

export default App;

import BasicScene from '../components/BasicScene.js';
import Asteroid from '../components/Asteroid.js';
import { Suspense } from 'react'

export default {
    title: "Meshes",
    component: Asteroid
}

const AsteroidTemplate = (args) => {
    return (
        <BasicScene>
            <Asteroid {...args} />
        </BasicScene>
    )
    
}

export const Asteroid_1 = AsteroidTemplate.bind({});
Asteroid_1.args = {
    radius: 1,
    distort: 1
}
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import propTypes from 'prop-types';

import AsteroidTexture from '../img/asteroid.jpg'

import { MeshDistortMaterial, useNormalTexture } from '@react-three/drei';

function Asteroid(props) {
    const mesh = useRef();

    // rotate the asteroid
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.001
    });

    const [normalTexture] = useNormalTexture(
        54,
        {
            repeat: [3,3],
            anisotropy: 8
        }
    )
    
    // draw the box
    return (
        <mesh {...props} ref={mesh}>
            <icosahedronGeometry args={[props.radius, 6]} />
            <MeshDistortMaterial 
                attach="material" 
                distort={1} 
                speed={0} 
                color="#3a3b3c"
                normalMap={normalTexture}
                flatShading={false}
                />
        </mesh>
    );
}

Asteroid.propTypes = {
    radius : propTypes.number,
    distort : propTypes.number,
}
  
export default Asteroid;
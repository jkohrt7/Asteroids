import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import propTypes from 'prop-types';

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
            <icosahedronGeometry args={[props.radius, 8]} />
            <MeshDistortMaterial 
                attach="material" 
                distort={1} 
                radius={2}
                speed={0} 
                color="#47494a"
                normalMap={normalTexture}
                />
        </mesh>
    );
}

Asteroid.propTypes = {
    radius : propTypes.number,
    distort : propTypes.number,
}
  
export default Asteroid;
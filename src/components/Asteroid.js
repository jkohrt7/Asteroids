import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import propTypes from 'prop-types';

import * as THREE from 'three'

import { MeshDistortMaterial, useNormalTexture } from '@react-three/drei';

function Asteroid(props) {
    const mesh = useRef();

    // rotate the asteroid
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.001
    });

    // Moving the camera based on asteroid size
    const camVec = new THREE.Vector3()
    useFrame((state, delta) => {
        const step = 0.04;

        state.camera.position.lerp(camVec.set(0, 0, props.zoom ? props.zoom : 10), step)

        state.camera.updateProjectionMatrix()
    })
    
    //For texturing the asteroid
    const [normalTexture] = useNormalTexture(
        54,
        {
            repeat: [3,3],
            anisotropy: 8
        }
    )
    
    // Return the mesh as a component
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
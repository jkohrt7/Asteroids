import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

function Box(props) {
    const dummy = new THREE.Vector3()

    useFrame((state, delta) => {
        const step = 0.1;

        state.camera.position.lerp(dummy.set(0, 0, props.zoom ? props.zoom : 10), step)

        state.camera.updateProjectionMatrix()
    })

    // draw the box
    return (
      <mesh>
        <boxGeometry  args={[props.size, props.size, props.size]} />
        <meshStandardMaterial color="#FFAE00" />
      </mesh>
    );
}
  
export default Box;
  
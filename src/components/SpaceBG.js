import { useLoader  } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture } from "@react-three/drei"
import { BackSide } from 'three';

function Box(props) {
    const mesh = useRef();
    const colorMap = useTexture('space.jpg')
    
    // draw the box
    return (
      <mesh {...props} ref={mesh}>
        <sphereGeometry args={[500, 32, 32]}/>
        <meshStandardMaterial color = '#FFFFFF' side={BackSide} map = {colorMap} />
      </mesh>
    );
}
  
export default Box;
  
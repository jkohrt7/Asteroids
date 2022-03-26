import { Canvas, useFrame, extend, useLoader } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import glsl from 'babel-plugin-glsl/macro';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from "three";

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uShape: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uShape;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 1.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uShape, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uShape;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    float random( vec3 scale, float seed ){
      return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed ) ;
    }

    void main() {
      float r = .01 * random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );

      vec2 tPos = vec2( 0, 1.3 * vWave + r );
      vec4 color = texture2D( uTexture, tPos );
    
      gl_FragColor = vec4( sin(color.rgb + uShape), 1.0 );
    }
  `
);

extend({ WaveShaderMaterial });

function Box(props) {
    //placeholder stuff
    const mesh = useRef();

    useEffect(() => {
      mesh.current.uShape = props.currAsteroid;
    });

    const [image] = useLoader(THREE.TextureLoader, ['gradient.jpg'])

    // draw the box
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <icosahedronGeometry  args={[0.5,20]} />
        <waveShaderMaterial ref={mesh} uTexture={image}/>
      </mesh>
    );
}
  
export default Box;
  
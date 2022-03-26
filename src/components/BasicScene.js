import { Canvas, useFrame } from '@react-three/fiber';
import './BasicScene.css'

function BasicScene(props) {


    return(
        <div className = "canvas-container">
            <Canvas  dpr={window.devicePixelRatio}>
                <ambientLight intensity={0.8}/>
                <pointLight position={[10, 20, 0]} />
                {props.children}
            </Canvas>
        </div>

    )
}

export default BasicScene;
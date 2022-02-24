import { Canvas, useFrame } from '@react-three/fiber';
import './BasicScene.css'

function BasicScene(props) {
    return(
        <div className = "canvas-container">
            <Canvas dpr={window.devicePixelRatio}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {props.children}
            </Canvas>
        </div>

    )
}

export default BasicScene;
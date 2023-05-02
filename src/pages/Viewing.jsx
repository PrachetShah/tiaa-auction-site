import React from 'react'
import { Canvas } from '@react-three/fiber'
import Jewelry360View from './3d_render/Jewelry360View'
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react'

function Loader() {
    const { progress } = useProgress()
    return <Html center style={{color:"white"}}>{progress} % loaded</Html>
}
const Viewing = () => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Canvas >
                <color attach="background" args={["black"]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<Loader />}>
                    <Jewelry360View />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Viewing
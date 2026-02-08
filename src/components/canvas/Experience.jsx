import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { Particles } from './Particles'
import { Brain } from './Brain'

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <Particles />
            <Brain />


            <EffectComposer>
                <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} intensity={2.5} />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>

            <OrbitControls makeDefault />
        </>
    )
}

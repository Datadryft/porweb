import { useMemo, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'

export function Brain(props) {
    const ref = useRef()
    const { viewport, mouse } = useThree()

    // Load the user's provided GLTF model
    const baseUrl = import.meta.env.BASE_URL;
    const { scene } = useGLTF(`${baseUrl}human-brain%20(3)/scene.gltf`)

    const [positions, colors] = useMemo(() => {
        if (!scene) return [new Float32Array(0), new Float32Array(0)]

        let mesh = null
        let maxVerts = 0;

        scene.traverse((child) => {
            if (child.isMesh) {
                const count = child.geometry.attributes.position.count;
                console.log(`Found mesh: ${child.name} with ${count} vertices`);
                if (count > maxVerts) {
                    mesh = child;
                    maxVerts = count;
                }
            }
        })

        if (!mesh) {
            console.warn("No mesh found in brain model")
            return [new Float32Array(0), new Float32Array(0)]
        }

        console.log("Selected mesh:", mesh.name);

        // Restore High Definition (50,000 points)
        const pointsCount = 50000
        const positions = new Float32Array(pointsCount * 3)
        const colors = new Float32Array(pointsCount * 3)

        const sampler = new MeshSurfaceSampler(mesh).build()
        const tempPosition = new THREE.Vector3()
        const color = new THREE.Color()

        for (let i = 0; i < pointsCount; i++) {
            sampler.sample(tempPosition)

            positions[i * 3] = tempPosition.x
            positions[i * 3 + 1] = tempPosition.y
            positions[i * 3 + 2] = tempPosition.z

            // --- COLOR LOGIC (Data Dryft Theme) ---
            const randomVal = Math.random()
            if (randomVal > 0.99) {
                color.set('#ffc266') // Spark
            } else if (randomVal > 0.90) {
                color.set('#ff8a00') // Brand Orange (Highlights)
            } else if (randomVal > 0.7) {
                color.set('#4a2000') // Dark Burnt Orange
            } else {
                // Darker Void Teal for better contrast against background
                color.set('#00151a')
            }

            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        return [positions, colors]
    }, [scene])

    useFrame((state, delta) => {
        const sensitivity = 0.5
        const lerpFactor = 0.1

        const targetX = (mouse.y * viewport.height / 100) * sensitivity
        const targetY = (mouse.x * viewport.width / 100) * sensitivity + (state.clock.elapsedTime / 20)

        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, lerpFactor)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, lerpFactor)

        // Scale pulsation
        // Increased base scale slightly to 1.8 to make it more pronounced
        const pulse = 1.8 + Math.sin(state.clock.elapsedTime * 2) * 0.02
        ref.current.scale.set(pulse, pulse, pulse)
    })

    return (
        <group {...props}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.006} // Smaller points for finer resolution
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

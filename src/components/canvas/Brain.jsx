import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'

export function Brain(props) {
    const ref = useRef()

    // Generate points on a TorusKnot to simulate a complex neural bundle structure
    const [positions, colors] = useMemo(() => {
        const count = 15000 // Increased density for better definition
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        // Create a dummy geometry to sample from
        // p=2, q=3 makes a nice knot. Radius 1, Tube 0.4 makes it chunky "brainy"
        const geometry = new THREE.TorusKnotGeometry(1, 0.35, 100, 32)

        // Sample points from the surface
        const material = new THREE.MeshBasicMaterial()
        const mesh = new THREE.Mesh(geometry, material)
        const sampler = new MeshSurfaceSampler(mesh).build()

        const tempPosition = new THREE.Vector3()
        const color = new THREE.Color()

        for (let i = 0; i < count; i++) {
            sampler.sample(tempPosition)
            positions.set([tempPosition.x, tempPosition.y, tempPosition.z], i * 3)

            // Color gradient: Mix between Cyan (#00f3ff) and brand Orange (#ff8a00)
            // With some "Hot" spots (white/yellow) for activity
            const randomVal = Math.random()
            if (randomVal > 0.95) {
                color.set('#ffffff') // Spark
            } else if (randomVal > 0.6) {
                color.set('#ff8a00') // Brand Orange
            } else {
                color.set('#00f3ff') // Cyan
            }

            colors.set([color.r, color.g, color.b], i * 3)
        }

        return [positions, colors]
    }, [])

    useFrame((state, delta) => {
        // Rotate slowly
        ref.current.rotation.x += delta / 20
        ref.current.rotation.y += delta / 15

        // Pulse effect: heartbeat of the AI
        const t = state.clock.getElapsedTime()
        // A heartbeat rhythm: beat-beat... pause...
        // simpler sine wave for now:
        const scale = 1 + Math.sin(t * 1.5) * 0.02
        ref.current.scale.set(scale, scale, scale)
    })

    return (
        <group {...props}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.012}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

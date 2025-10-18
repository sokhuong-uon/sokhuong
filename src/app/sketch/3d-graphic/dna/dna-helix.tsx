'use client'

import { useMemo, useRef } from 'react'

import { extend, useFrame } from '@react-three/fiber'
import {
	add,
	cos,
	mix,
	mul,
	positionLocal,
	sin,
	uniform,
	vec3,
} from 'three/tsl'
import * as THREE from 'three/webgpu'

// Extend React Three Fiber with WebGPU materials
extend({
	MeshBasicNodeMaterial: THREE.MeshBasicNodeMaterial,
	MeshStandardNodeMaterial: THREE.MeshStandardNodeMaterial,
})

// Add TypeScript declarations
declare module '@react-three/fiber' {
	interface ThreeElements {
		meshBasicNodeMaterial: any
		meshStandardNodeMaterial: any
	}
}

const DNAHelix = () => {
	const helixRef = useRef<THREE.Group>(null)

	const helixGeometry = useMemo(() => {
		const points: THREE.Vector3[] = []
		const radius = 5
		const height = 40
		const segments = 200

		for (let i = 0; i <= segments; i++) {
			const t = (i / segments) * Math.PI * 4 // 4 full rotations
			const y = (i / segments) * height - height / 2

			points.push(
				new THREE.Vector3(radius * Math.cos(t), y, radius * Math.sin(t))
			)
		}

		return new THREE.TubeGeometry(
			new THREE.CatmullRomCurve3(points),
			segments,
			0.3,
			8,
			false
		)
	}, [])

	// Create base pair connecting rods
	const basePairGeometry = useMemo(() => {
		const geometry = new THREE.CylinderGeometry(0.1, 0.1, 10, 8)
		return geometry
	}, [])

	// TSL materials with animated effects
	const helixMaterial1 = useMemo(() => {
		const material = new THREE.MeshBasicNodeMaterial()

		// Create animated color based on position and time
		const timeUniform = uniform(0)
		const animatedColor = mix(
			vec3(0.2, 0.6, 1.0), // Blue
			vec3(0.8, 0.2, 0.6), // Pink
			sin(add(mul(positionLocal.y, 0.1), mul(timeUniform, 2)))
		)

		material.colorNode = animatedColor
		material.transparent = true
		material.opacity = 0.8

		return { material, timeUniform }
	}, [])

	const helixMaterial2 = useMemo(() => {
		const material = new THREE.MeshBasicNodeMaterial()

		const timeUniform = uniform(0)
		const animatedColor = mix(
			vec3(1.0, 0.6, 0.2), // Orange
			vec3(0.6, 0.8, 0.2), // Green
			cos(add(mul(positionLocal.y, 0.1), mul(timeUniform, 2)))
		)

		material.colorNode = animatedColor
		material.transparent = true
		material.opacity = 0.8

		return { material, timeUniform }
	}, [])

	const basePairMaterial = useMemo(() => {
		const material = new THREE.MeshBasicNodeMaterial()

		const timeUniform = uniform(0)
		const pulseColor = mix(
			vec3(0.8, 0.8, 0.2), // Yellow
			vec3(1.0, 0.4, 0.8), // Magenta
			sin(mul(timeUniform, 3))
		)

		material.colorNode = pulseColor

		return { material, timeUniform }
	}, [])

	// Create base pairs at regular intervals
	const basePairs = useMemo(() => {
		const pairs = []
		const numPairs = 20

		for (let i = 0; i < numPairs; i++) {
			const angle = (i / numPairs) * Math.PI * 4
			const y = (i / numPairs) * 40 - 20
			pairs.push({ angle, y })
		}

		return pairs
	}, [])

	useFrame((state) => {
		const elapsed = state.clock.elapsedTime

		// Update TSL time uniforms
		helixMaterial1.timeUniform.value = elapsed
		helixMaterial2.timeUniform.value = elapsed
		basePairMaterial.timeUniform.value = elapsed

		// Rotate the entire DNA structure
		if (helixRef.current) {
			helixRef.current.rotation.y = elapsed * 0.5
		}
	})

	return (
		<group ref={helixRef}>
			{/* First helix strand */}
			<mesh geometry={helixGeometry}>
				<primitive object={helixMaterial1.material} />
			</mesh>

			{/* Second helix strand (rotated 180 degrees) */}
			<mesh geometry={helixGeometry} rotation={[0, Math.PI, 0]}>
				<primitive object={helixMaterial2.material} />
			</mesh>

			{/* Base pairs connecting the strands */}
			{basePairs.map((pair, index) => (
				<mesh
					key={index}
					geometry={basePairGeometry}
					position={[0, pair.y, 0]}
					rotation={[0, 0, Math.PI / 2]}
				>
					<primitive object={basePairMaterial.material} />
				</mesh>
			))}
		</group>
	)
}

export default DNAHelix

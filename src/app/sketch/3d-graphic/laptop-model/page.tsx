'use client'

import { useEffect, useRef, useState } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { animate } from 'motion'
import * as THREE from 'three'

import { Model } from './laptop-model'

export default function LaptopModel() {
	const [isLidOpen, setIsLidOpen] = useState(true)
	const toggleLid = () => {
		setIsLidOpen(!isLidOpen)
	}

	return (
		<div className="relative">
			<Canvas
				className="relative aspect-video w-full"
				frameloop="demand"
				camera={{ fov: 45, position: [-0, 0.3, 0.6] }}
			>
				<pointLight position={[0, 0.9, 0]} intensity={3} />
				<Scene isOpen={isLidOpen} />
			</Canvas>
			<div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform">
				<button
					onClick={toggleLid}
					className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 active:scale-95"
				>
					{isLidOpen ? 'Close Lid' : 'Open Lid'}
				</button>
			</div>
		</div>
	)
}

function Scene({ isOpen }: { isOpen: boolean }) {
	const lidGroupRef = useRef<THREE.Group>(null)
	const { invalidate } = useThree()

	useEffect(() => {
		const handleLidAnimation = () => {
			if (lidGroupRef.current) {
				const targetRotation = isOpen ? -0.1 : Math.PI * 0.5

				animate(
					lidGroupRef.current.rotation,
					{ x: targetRotation },
					{
						type: 'spring',
						stiffness: 120,
						damping: 25,
						duration: 1.2,
						onUpdate: () => {
							invalidate()
						},
					}
				)
			}
		}
		handleLidAnimation()
	}, [isOpen, invalidate])

	return (
		<>
			<OrbitControls minDistance={0.1} maxDistance={30} makeDefault />

			{/* @ts-ignore */}
			<Model isOpen={isOpen} lidGroupRef={lidGroupRef} />

			<EffectComposer>
				<Bloom
					intensity={1.5}
					luminanceThreshold={2}
					luminanceSmoothing={0.025}
					mipmapBlur={true}
				/>
			</EffectComposer>
		</>
	)
}

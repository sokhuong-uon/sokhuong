'use client'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

import { Model } from './laptop-model'

export default function LaptopModel() {
	return (
		<Canvas
			className="relative aspect-video w-full"
			frameloop="demand"
			camera={{ fov: 45 }}
		>
			<OrbitControls minDistance={0.1} maxDistance={30} makeDefault />

			<Stage>
				<Model />
			</Stage>

			<EffectComposer>
				<Bloom
					intensity={1.5}
					luminanceThreshold={2}
					luminanceSmoothing={0.025}
					mipmapBlur={true}
				/>
			</EffectComposer>
		</Canvas>
	)
}

'use client'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Bloom } from './bloom'
import { Model } from './laptop-model'

export default function LaptopModel() {
	return (
		<Canvas
			className="relative aspect-video w-full"
			camera={{ position: [0, 0, 5], fov: 45 }}
			frameloop="demand"
		>
			<pointLight color={'#00ffff'} position={[0.5, 0, 0]} intensity={0.5} />

			<OrbitControls minDistance={0.1} maxDistance={30} makeDefault />

			<Stage environment={'apartment'} preset={'portrait'}>
				<Model />
			</Stage>
			<Bloom />
		</Canvas>
	)
}

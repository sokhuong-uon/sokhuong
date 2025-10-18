'use client'

import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import DNAHelix from './dna-helix'

export default function DNAPage() {
	return (
		<Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
			<Suspense fallback={null}>
				<DNAHelix />
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
			</Suspense>
		</Canvas>
	)
}

import { Suspense } from 'react'

import { Html, OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import tailwindColors from 'tailwindcss/colors'

export function ModelViewer() {
	const { resolvedTheme: mode } = useTheme()

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 1.5]}
			camera={{ position: [0, 0, 150], fov: 50 }}
		>
			<color
				attach="background"
				args={[
					mode === 'dark' ? tailwindColors.zinc[900] : tailwindColors.white,
				]}
			/>

			<Suspense
				fallback={
					<Html center>
						<div className="text-muted-foreground">Loading 3D model...</div>
					</Html>
				}
			>
				<Model url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf" />
			</Suspense>
		</Canvas>
	)
}

function Model({ url }: { url: string }) {
	const { scene } = useGLTF(url)

	return (
		<>
			<Stage>
				<primitive object={scene} />
			</Stage>
			<OrbitControls makeDefault />
		</>
	)
}

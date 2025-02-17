import { Suspense } from 'react'

import { Environment, Html, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Expand } from 'lucide-react'

import { Button } from '@/components/ui/button'

function Model() {
	return (
		<mesh position={[0, -1, -1]}>
			<boxGeometry />
			<meshStandardMaterial color="orange" />
		</mesh>
	)
}

export function ModelSceneCard() {
	return (
		<div className="relative aspect-video border">
			<Canvas shadows dpr={[1, 2]}>
				<Suspense
					fallback={
						<Html center>
							<div className="text-muted-foreground">Loading 3D model...</div>
						</Html>
					}
				>
					<Model />

					<OrbitControls makeDefault />
					<Environment preset="studio" />
				</Suspense>
			</Canvas>

			<Button
				variant="outline"
				size="icon"
				className="absolute bottom-2 right-2 bg-background/50 backdrop-blur-sm"
			>
				<Expand className="h-4 w-4" />
			</Button>
		</div>
	)
}

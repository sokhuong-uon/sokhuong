'use client'

import { Suspense } from 'react'

import { Environment, Html, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Download, Expand, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ProductCard } from '@/features/store/components/product-card'
import { models } from '@/utils/models'

function Model() {
	return (
		<mesh position={[0, -1, -1]}>
			<boxGeometry />
			<meshStandardMaterial color="orange" />
		</mesh>
	)
}

export default function ProductDetail({ params }: { params: { id: string } }) {
	return (
		<div className="container py-8">
			<div className="relative aspect-video w-full border">
				<Canvas shadows dpr={[1, 2]}>
					<Suspense
						fallback={
							<Html center>
								<div className="text-muted-foreground">Loading 3D model...</div>
							</Html>
						}
					>
						<Stage environment="studio" intensity={0.5}>
							<Model />
						</Stage>
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

			<div className="container mx-auto space-y-8 px-4 py-6">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-6">
						<div>
							<span className="text-3xl font-bold">id: {params.id}</span>
							<h1 className="text-3xl font-bold">Futuristic Car</h1>
							<div className="mt-2 text-2xl font-bold">$29.99</div>
						</div>

						<div className="flex gap-2">
							<Button className="flex-1">
								<ShoppingCart className="mr-2 h-4 w-4" />
								Add to Cart
							</Button>
							<Button variant="outline" size="icon">
								<Download className="h-4 w-4" />
							</Button>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium">Format</label>
							<Select defaultValue="glb">
								<SelectTrigger>
									<SelectValue placeholder="Select format" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="glb">GLB</SelectItem>
									<SelectItem value="fbx">FBX</SelectItem>
									<SelectItem value="obj">OBJ</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="space-y-6">
						<div>
							<h3 className="mb-2 text-sm font-medium">Specifications</h3>
							<div className="grid grid-cols-2 gap-4 text-sm">
								<div>
									<div className="text-muted-foreground">Polygons</div>
									<div>24,580</div>
								</div>
								<div>
									<div className="text-muted-foreground">Textures</div>
									<div>4K PBR</div>
								</div>
								<div>
									<div className="text-muted-foreground">Rigged</div>
									<div>Yes</div>
								</div>
								<div>
									<div className="text-muted-foreground">Animation</div>
									<div>Included</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="mb-2 text-sm font-medium">Description</h3>
							<p className="text-sm text-muted-foreground">
								High-quality 3D model of a futuristic concept car. Perfect for
								games, architectural visualization, or VR/AR applications.
								Includes detailed textures, rigging, and basic animations.
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className="mb-4 flex items-center justify-between">
						<h2 className="text-xl font-bold">Similar Models</h2>
					</div>

					<div className="relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{models.map((model) => (
							<ProductCard model={model} key={model.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import {
	CameraShake,
	OrbitControls,
	PivotControls,
	View,
} from "@react-three/drei";
import { Apple, Candy, Duck, Flash, Soda } from "./model";
import { SceneView } from "@/features/store/components/scene-view";
import { ProductCard } from "@/features/store/components/product-card";

const models = [
	{
		id: 1,
		name: "Futuristic Car",
		category: "Vehicles",
		price: 29.99,
		scene: (
			<SceneView backgroundColor="hotpink" environment>
				<PivotControls
					lineWidth={3}
					depthTest={false}
					// @ts-ignore
					displayValues={false}
					scale={2}
				>
					<Soda scale={6} position={[0, -1.6, 0]} />
				</PivotControls>
				<OrbitControls makeDefault />
			</SceneView>
		),
	},
	{
		id: 2,
		name: "Ancient Temple",
		category: "Architecture",
		price: 39.99,
		scene: (
			<SceneView backgroundColor="lightblue" environment>
				<Apple position={[0, -1, 0]} scale={14} />
				<OrbitControls makeDefault />
			</SceneView>
		),
	},
	{
		id: 3,
		name: "Sci-Fi Weapon",
		category: "Props",
		price: 19.99,
		scene: (
			<SceneView backgroundColor="lightgreen" environment>
				<Duck scale={2} position={[0, -1.6, 0]} />
				<CameraShake intensity={2} />
			</SceneView>
		),
	},
	{
		id: 4,
		name: "Fantasy Character",
		category: "Characters",
		price: 49.99,
		scene: (
			<SceneView backgroundColor="peachpuff" environment>
				<Candy scale={3} />
			</SceneView>
		),
	},
	{
		id: 5,
		name: "Modern City Block",
		category: "Architecture",
		price: 59.99,
		scene: (
			<SceneView backgroundColor="orange" environment>
				<Flash scale={3} />
			</SceneView>
		),
	},
];

export default function Store() {
	const container = useRef<HTMLElement>(null);

	return (
		<main
			className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
			ref={container}
		>
			<h1 className="text-4xl font-bold mb-12 text-center">3D Model Store</h1>

			<div className="flex flex-col md:flex-row gap-4 mb-12">
				<div className="flex-grow">
					<div className="relative">
						<Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
						<Input
							type="text"
							placeholder="Search models..."
							className="pl-8"
						/>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Filter className="h-4 w-4" />
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Categories</SelectItem>
							<SelectItem value="Vehicles">Vehicles</SelectItem>
							<SelectItem value="Architecture">Architecture</SelectItem>
							<SelectItem value="Props">Props</SelectItem>
							<SelectItem value="Characters">Characters</SelectItem>
							<SelectItem value="Nature">Nature</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 relative">
				<Canvas
					style={{
						position: "fixed",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						overflow: "hidden",
					}}
					//@ts-ignore
					eventSource={container}
					className="border"
				>
					<View.Port />
				</Canvas>

				{models.map((model) => (
					<ProductCard model={model} key={model.id} />
				))}
			</div>
		</main>
	);
}

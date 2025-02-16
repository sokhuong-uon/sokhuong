import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import * as THREE from "three";
import { SceneView } from "./scene-view";
import { Gltf } from "@react-three/drei";

type ProductCardProps = {
	model: {
		id: number | string;
		name: string;
		category: string;
		price: number;

		scene: {
			backgroundColor: THREE.ColorRepresentation;
			environment: boolean;
			models: {
				url: string;
				scale: number;
				position: [number, number, number];
			}[];
		};
	};
};

export function ProductCard({ model }: ProductCardProps) {
	return (
		<Card key={model.id} className="flex flex-col">
			<CardContent className="p-6">
				<div className="w-full h-48 object-cover rounded-md mb-6 relative">
					<SceneView
						backgroundColor={model.scene.backgroundColor}
						environment={model.scene.environment}
					>
						{model.scene.models.map((sceneModel) => (
							<Gltf
								key={sceneModel.url}
								src={sceneModel.url}
								position={sceneModel.position}
								scale={sceneModel.scale}
							></Gltf>
						))}
					</SceneView>
				</div>
				<CardTitle className="text-lg mb-3">{model.name}</CardTitle>
				<Badge>{model.category}</Badge>
			</CardContent>
			<CardFooter className="flex justify-between items-center mt-auto pt-4 px-6 pb-6">
				<span className="text-lg font-bold">${model.price.toFixed(2)}</span>
				<Button>Add to Cart</Button>
			</CardFooter>
		</Card>
	);
}

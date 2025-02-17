"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Expand, Download, ShoppingCart } from "lucide-react";
import { ProductCard } from "@/features/store/components/product-card";
import { models } from "@/utils/models";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

function Model() {
	return (
		<mesh position={[0, -1, -1]}>
			<boxGeometry />
			<meshStandardMaterial color="orange" />
		</mesh>
	);
}

export default function ProductDetail() {
	const router = useRouter();

	return (
		<Dialog defaultOpen open onOpenChange={() => router.back()}>
			<DialogOverlay>
				<DialogContent className="overflow-y-auto max-h-[calc(100dvh-10rem)] overflow-x-hidden lg:min-w-[60rem] min-w-full">
					<div className="py-8">
						<div className="relative w-full aspect-video border">
							<Canvas shadows dpr={[1, 2]}>
								<Suspense
									fallback={
										<Html center>
											<div className="text-muted-foreground">
												Loading 3D model...
											</div>
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

						<div className=" mx-auto px-4 py-6 space-y-8">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-6">
									<div>
										<h1 className="text-3xl font-bold">Futuristic Car</h1>
										<div className="text-2xl font-bold mt-2">$29.99</div>
									</div>

									<div className="flex gap-2">
										<Button className="flex-1">
											<ShoppingCart className="h-4 w-4 mr-2" />
											Add to Cart
										</Button>
										<Button variant="outline" size="icon">
											<Download className="h-4 w-4" />
										</Button>
									</div>

									<div>
										<label className="block text-sm font-medium mb-2">
											Format
										</label>
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
										<h3 className="text-sm font-medium mb-2">Specifications</h3>
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
										<h3 className="text-sm font-medium mb-2">Description</h3>
										<p className="text-sm text-muted-foreground">
											High-quality 3D model of a futuristic concept car. Perfect
											for games, architectural visualization, or VR/AR
											applications. Includes detailed textures, rigging, and
											basic animations.
										</p>
									</div>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between mb-4">
									<h2 className="text-xl font-bold">Similar Models</h2>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 relative">
									{models.map((model) => (
										<ProductCard model={model} key={model.id} />
									))}
								</div>
							</div>
						</div>
					</div>
				</DialogContent>
			</DialogOverlay>
		</Dialog>
	);
}

import { eq } from 'drizzle-orm'
import { Download, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { db } from '@/db'
import { model } from '@/db/schema'
import { ModelSceneCard } from '@/features/store/components/model-scene-card'

export default async function ProductDetail(
    props: {
        params: Promise<{ id: string }>
    }
) {
    const params = await props.params;
    const models = await db.select().from(model).where(eq(model.id, params.id))

    return (
		<div className="container py-8">
			<ModelSceneCard />

			<div className="container mx-auto space-y-8 px-4 py-6">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold">{models[0].name}</h1>
							<div className="mt-2 text-2xl font-bold">${models[0].price}</div>
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
			</div>
		</div>
	)
}

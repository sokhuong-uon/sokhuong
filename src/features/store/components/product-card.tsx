import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { ModelSchema } from '@/db/schema'

type ProductCardProps = {
	model: Omit<ModelSchema, 'specification'>
}

export function ProductCard({ model }: ProductCardProps) {
	return (
		<Card key={model.id} className="flex flex-col">
			<CardContent className="p-6 pb-0">
				<div className="relative mb-6 aspect-video w-full rounded-md bg-neutral-300/30">
					{model.coverImagePath && (
						<Image
							src={model.coverImagePath}
							alt={model.name}
							fill
							className="object-cover"
							sizes="(max-width: 430px) 293px, (max-width: 768px) 300px, 400px"
							priority
						/>
					)}
				</div>

				<CardTitle className="mb-3 text-lg">{model.name}</CardTitle>
			</CardContent>

			<CardFooter className="flex items-center justify-between">
				<span className="text-lg font-bold">
					${Number(model.price).toFixed(2)}
				</span>
				<Button asChild>
					<Link prefetch href={`/store/${model.id}`}>
						Detail
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}

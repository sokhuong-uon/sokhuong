import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'

type ProductCardProps = {
	model: {
		id: number | string
		name: string
		price: number
	}
}

export function ProductCard({ model }: ProductCardProps) {
	return (
		<Card key={model.id} className="flex flex-col">
			<CardContent className="p-6 pb-0">
				<div className="relative mb-6 aspect-video w-full rounded-md bg-neutral-300/30"></div>

				<CardTitle className="mb-3 text-lg">{model.name}</CardTitle>
			</CardContent>

			<CardFooter className="flex items-center justify-between">
				<span className="text-lg font-bold">
					${model.price !== 0 ? model.price.toFixed(2) : 0}
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

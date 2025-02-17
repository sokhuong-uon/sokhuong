import Link from 'next/link'

import { Maximize } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'

type ProductCardProps = {
	model: {
		id: number | string
		name: string
		category: string
		price: number
	}
}

export function ProductCard({ model }: ProductCardProps) {
	return (
		<Card key={model.id} className="flex flex-col">
			<CardContent className="p-6 pb-0">
				<div className="relative mb-6 aspect-video w-full rounded-md bg-neutral-300/30">
					<Button
						asChild
						className="group absolute bottom-0 right-0"
						variant={'link'}
						size={'icon'}
					>
						<Link prefetch href={`/store/${model.id}`}>
							<Maximize className="transition-transform group-focus-within:scale-110 group-hover:scale-110" />
						</Link>
					</Button>
				</div>

				<CardTitle className="mb-3 text-lg">{model.name}</CardTitle>
			</CardContent>

			<CardFooter className="flex items-center justify-between">
				<span className="text-lg font-bold">${model.price.toFixed(2)}</span>
				<Button>Add to Cart</Button>
			</CardFooter>
		</Card>
	)
}

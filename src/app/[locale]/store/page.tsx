'use client'

import { useRef } from 'react'

import { Filter, Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ProductCard } from '@/features/store/components/product-card'
import { models } from '@/utils/models'

export default function Store() {
	const container = useRef<HTMLElement>(null)

	return (
		<main
			className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
			ref={container}
		>
			<h1 className="mb-12 text-center text-4xl font-bold">3D Model Store</h1>

			<div className="mb-12 flex flex-col gap-4 md:flex-row">
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

			<div className="relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{models.map((model) => (
					<ProductCard model={model} key={model.id} />
				))}
			</div>
		</main>
	)
}

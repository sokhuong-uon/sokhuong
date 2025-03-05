import { Filter, Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { db } from '@/db'
import { model } from '@/db/schema'
import { ModelListFilter } from '@/features/store/components/model-list-filter'
import { ProductCard } from '@/features/store/components/product-card'

export default async function Store() {
	const models = await db.select().from(model)

	return (
		<main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
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
					<ModelListFilter />
				</div>
			</div>

			<ul className="relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{models.map((model) => (
					<li key={model.id}>
						<ProductCard model={model} />
					</li>
				))}
			</ul>
		</main>
	)
}

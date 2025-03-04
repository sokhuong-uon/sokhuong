import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function ModelListFilter() {
	return (
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
	)
}

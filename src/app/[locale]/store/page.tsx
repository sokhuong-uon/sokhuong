"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const models = [
	{
		id: 1,
		name: "Futuristic Car",
		category: "Vehicles",
		price: 29.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 2,
		name: "Ancient Temple",
		category: "Architecture",
		price: 39.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 3,
		name: "Sci-Fi Weapon",
		category: "Props",
		price: 19.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 4,
		name: "Fantasy Character",
		category: "Characters",
		price: 49.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 5,
		name: "Modern City Block",
		category: "Architecture",
		price: 59.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 6,
		name: "Alien Plant",
		category: "Nature",
		price: 14.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 7,
		name: "Steampunk Gadget",
		category: "Props",
		price: 24.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 8,
		name: "Underwater Creature",
		category: "Characters",
		price: 34.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 9,
		name: "Futuristic Skyscraper",
		category: "Architecture",
		price: 69.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 10,
		name: "Vintage Airplane",
		category: "Vehicles",
		price: 44.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 11,
		name: "Magical Staff",
		category: "Props",
		price: 29.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 12,
		name: "Alien Landscape",
		category: "Nature",
		price: 54.99,
		image: "/placeholder.svg?height=200&width=200",
	},
];

const ITEMS_PER_PAGE = 6;

export default function Store() {
	const [searchTerm, setSearchTerm] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const filteredModels = models.filter(
		(model) =>
			model.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(categoryFilter === "" || model.category === categoryFilter)
	);

	const totalPages = Math.ceil(filteredModels.length / ITEMS_PER_PAGE);
	const paginatedModels = filteredModels.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		window.scrollTo(0, 0);
	};

	return (
		<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-4xl font-bold mb-12 text-center">3D Model Store</h1>

			<div className="flex flex-col md:flex-row gap-4 mb-12">
				<div className="flex-grow">
					<div className="relative">
						<Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
						<Input
							type="text"
							placeholder="Search models..."
							className="pl-8"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setCurrentPage(1);
							}}
						/>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Filter className="h-4 w-4" />
					<Select
						value={categoryFilter}
						onValueChange={(value) => {
							setCategoryFilter(value);
							setCurrentPage(1);
						}}
					>
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

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
				{paginatedModels.map((model) => (
					<Card key={model.id} className="flex flex-col">
						<CardContent className="p-6">
							<div className="w-full h-48 object-cover rounded-md mb-6"></div>
							<CardTitle className="text-lg mb-3">{model.name}</CardTitle>
							<Badge>{model.category}</Badge>
						</CardContent>
						<CardFooter className="flex justify-between items-center mt-auto pt-4 px-6 pb-6">
							<span className="text-lg font-bold">
								${model.price.toFixed(2)}
							</span>
							<Button>Add to Cart</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			{totalPages > 1 && (
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
							>
								<ChevronLeft className="h-4 w-4 mr-2" />
								Previous
							</Button>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}
							>
								Next
								<ChevronRight className="h-4 w-4 ml-2" />
							</Button>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</main>
	);
}

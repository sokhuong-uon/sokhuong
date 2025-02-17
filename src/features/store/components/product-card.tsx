import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Maximize } from "lucide-react";
import Link from "next/link";

type ProductCardProps = {
	model: {
		id: number | string;
		name: string;
		category: string;
		price: number;
	};
};

export function ProductCard({ model }: ProductCardProps) {
	return (
		<Card key={model.id} className="flex flex-col">
			<CardContent className="p-6 pb-0">
				<div className="w-full aspect-video  rounded-md mb-6 relative bg-neutral-300/30">
					<Button
						asChild
						className="absolute bottom-0 right-0 group"
						variant={"link"}
						size={"icon"}
					>
						<Link prefetch href={`/store/${model.id}`}>
							<Maximize className="group-hover:scale-110 transition-transform group-focus-within:scale-110" />
						</Link>
					</Button>
				</div>

				<CardTitle className="text-lg mb-3">{model.name}</CardTitle>
			</CardContent>

			<CardFooter className="flex justify-between items-center">
				<span className="text-lg font-bold">${model.price.toFixed(2)}</span>
				<Button>Add to Cart</Button>
			</CardFooter>
		</Card>
	);
}

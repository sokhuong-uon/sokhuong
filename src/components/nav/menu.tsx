import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export function Menu() {
	return (
		<nav className="w-full container border-b py-4 bg-white dark:bg-black backdrop-blur-sm flex">
			<ul aria-label="menu" className="flex gap-4 w-full">
				<li className="mr-auto">
					<Button
						asChild
						variant={"link"}
						size={"lg"}
						className="px-2 sm:px-4 focus-within:underline"
					>
						<Link href="/">Home</Link>
					</Button>
				</li>
				<li>
					<Button
						asChild
						variant={"link"}
						size={"lg"}
						className="px-2 sm:px-4 focus-within:underline"
					>
						<Link href="/sketch">Sketch</Link>
					</Button>
				</li>
				<li>
					<Button
						asChild
						variant={"link"}
						size={"lg"}
						className="px-2 sm:px-4 focus-within:underline"
					>
						<Link href="/about">About</Link>
					</Button>
				</li>
			</ul>
		</nav>
	);
}
